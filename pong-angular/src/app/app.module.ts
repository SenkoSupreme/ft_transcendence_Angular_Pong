import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
