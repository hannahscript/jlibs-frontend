import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";

@Component({
  selector: 'app-word-prompt',
  templateUrl: './word-prompt.component.html',
  styleUrls: ['./word-prompt.component.scss']
})
export class WordPromptComponent implements OnInit {
  public prompt: string = '';

  constructor(public readonly gameService: GameService) { }

  ngOnInit(): void {
  }

  submitPrompt() {
    this.gameService.submitPrompt(this.gameService.currentPrompt$.getValue()?.promptId!, this.prompt);
  }
}
