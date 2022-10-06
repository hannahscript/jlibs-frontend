import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RxStompService} from "./rx-stomp.service";
import {rxStompServiceFactory} from "./rx-stomp-service-factory";
import { BeforeConnectLobbyComponent } from './page/before-connect-lobby/before-connect-lobby.component';
import { WordPromptComponent } from './page/word-prompt/word-prompt.component';
import {FormsModule} from "@angular/forms";
import { ShowStoriesComponent } from './page/show-stories/show-stories.component';
import { UserListComponent } from './component/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeforeConnectLobbyComponent,
    WordPromptComponent,
    ShowStoriesComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
