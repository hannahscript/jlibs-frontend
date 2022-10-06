import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeforeConnectLobbyComponent} from "./page/before-connect-lobby/before-connect-lobby.component";
import {WordPromptComponent} from "./page/word-prompt/word-prompt.component";
import {ShowStoriesComponent} from "./page/show-stories/show-stories.component";

const routes: Routes = [
  {path: 'prompt', component: WordPromptComponent},
  {path: 'stories', component: ShowStoriesComponent},
  {path: '', component: BeforeConnectLobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
