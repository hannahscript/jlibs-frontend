import { Component, OnInit } from '@angular/core';
import {GameService} from "../../game.service";

@Component({
  selector: 'app-show-stories',
  templateUrl: './show-stories.component.html',
  styleUrls: ['./show-stories.component.scss']
})
export class ShowStoriesComponent implements OnInit {
  public stories: Array<{user: string, story: string}> = [];

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.stories$.subscribe(stories => {
      if (!stories) return;

      for (let entry of Object.entries(stories.stories)) {
        this.stories.push({user: entry[0], story: entry[1].content});
      }
    })
  }
}
