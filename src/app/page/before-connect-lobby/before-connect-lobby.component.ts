import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";

@Component({
  selector: 'app-before-connect-lobby',
  templateUrl: './before-connect-lobby.component.html',
  styleUrls: ['./before-connect-lobby.component.scss']
})
export class BeforeConnectLobbyComponent implements OnInit {

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
  }

  startGame() {
    this.gameService.startGame();
  }
}
