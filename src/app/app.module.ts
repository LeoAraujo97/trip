import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitationComponent } from './screen/invitation/invitation.component';
import { HistoryComponent } from './screen/history/history.component';
import { CardComponent } from './components/card/card.component';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';

@NgModule({
  declarations: [
    AppComponent,
    InvitationComponent,
    HistoryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParallaxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
