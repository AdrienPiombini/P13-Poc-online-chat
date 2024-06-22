import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernamePageComponent } from './username-page/username-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

@NgModule({
  declarations: [AppComponent, UsernamePageComponent, ChatPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
