import {Component, OnInit} from '@angular/core';
import {GameService} from "./game.service";
import {RxStompService} from "./rx-stomp.service";
import {PromptRequestMessage} from "./message/prompt-request-message";
import {NewUserConnectedMessage} from "./message/new-user-connected-message";
import {ErrorMessage} from "./message/error-message";
import {PresentationMessage} from "./message/presentation-message";
import {Router} from "@angular/router";
import {WelcomeMessage} from "./message/welcome-message";
import {UserEnteredPromptMessage} from "./message/user-entered-prompt-message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JLibs';

  private gameStarted = false;

  constructor(private readonly gameService: GameService,
              private readonly stomp: RxStompService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.stomp.watch("/topic/prompt").subscribe(msg => this.handlePrompt(JSON.parse(msg.body) as PromptRequestMessage));
    this.stomp.watch("/topic/user").subscribe(msg => this.handleUserConnected(JSON.parse(msg.body) as NewUserConnectedMessage));
    this.stomp.watch("/user/queue/error").subscribe(msg => this.handleError(JSON.parse(msg.body) as ErrorMessage));
    this.stomp.watch("/user/queue/welcome").subscribe(msg => this.handleWelcomeMessage(JSON.parse(msg.body) as WelcomeMessage));
    this.stomp.watch("/topic/stories").subscribe(msg => this.handleStoriesDone(JSON.parse(msg.body) as PresentationMessage));
    this.stomp.watch("/topic/entered").subscribe(msg => this.handleUserEnteredPromptMessage(JSON.parse(msg.body) as UserEnteredPromptMessage));
    this.gameService.readyUp();
  }

  private async handlePrompt(msg: PromptRequestMessage) {
    console.log(`Received prompt #${msg.promptId}: ${msg.description}`);

    this.gameService.resetUserState();
    this.gameService.currentPrompt$.next(msg);

    if (!this.gameStarted) {
      await this.router.navigate(['prompt']);
      this.gameStarted = true;
    }
  }

  private handleUserConnected(msg: NewUserConnectedMessage) {
    console.log(`New user connected: ${msg.username}`);
    this.gameService.addUser(msg.username);
  }

  private handleError(msg: ErrorMessage) {
    console.log(`Received error #${msg.errorId}: ${msg.message}`);
  }

  private async handleStoriesDone(msg: PresentationMessage) {
    console.log(`Stories completed`);
    this.gameService.stories$.next(msg);
    await this.router.navigate(['stories']);
  }

  private handleWelcomeMessage(msg: WelcomeMessage) {
    console.log(`Received welcome message`);
    this.gameService.initializeUserList(msg.users);
  }

  private handleUserEnteredPromptMessage(msg: UserEnteredPromptMessage) {
    this.gameService.handleUserEnteredPrompt(msg.username);
  }
}
