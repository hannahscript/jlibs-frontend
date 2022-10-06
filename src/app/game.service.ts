import { Injectable } from '@angular/core';
import {RxStompService} from "./rx-stomp.service";
import {PromptRequestMessage} from "./message/prompt-request-message";
import {BehaviorSubject} from "rxjs";
import {PresentationMessage} from "./message/presentation-message";
import {UserState} from "./model/user-state";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public currentPrompt$: BehaviorSubject<PromptRequestMessage | null> = new BehaviorSubject<PromptRequestMessage | null>(null);
  public stories$: BehaviorSubject<PresentationMessage | null> = new BehaviorSubject<PresentationMessage | null>(null);
  public users$: BehaviorSubject<UserState[]> = new BehaviorSubject<UserState[]>([]);

  constructor(private readonly stomp: RxStompService) { }

  readyUp(): void {
    console.log('GS Sending ready up message');
    this.stomp.publish({destination: '/app/ready', body: '{}'});
  }

  startGame(): void {
    this.stomp.publish({destination: '/app/start', body: '{}'});
  }

  submitPrompt(promptId: number, answer: string): void {
    this.stomp.publish({destination: '/app/prompt', body: JSON.stringify({answer, promptId})});
  }

  initializeUserList(users: string[]) {
    this.users$.next(users.map(username => ({username, enteredPrompt: false})));
  }

  addUser(username: string) {
    const users = this.users$.getValue();
    this.users$.next([{username, enteredPrompt: false}, ...users]);
  }

  handleUserEnteredPrompt(username: string) {
    let userState = this.users$.getValue().find(userState => userState.username === username);
    if (!userState) throw new Error(`User not found: ${username}`);
    userState.enteredPrompt = true;
    this.users$.next(this.users$.getValue());
  }

  resetUserState() {
    for (let userState of this.users$.getValue()) {
      userState.enteredPrompt = false;
    }

    this.users$.next(this.users$.getValue());
  }
}
