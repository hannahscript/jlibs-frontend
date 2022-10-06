import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public readonly gameService: GameService) { }

  ngOnInit(): void {
  }

}
