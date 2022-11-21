import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { UnderDevPageComponent } from './under-dev-page/under-dev-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileCardComponent,
    AboutUsComponent,
    HomeComponent,
    EventsPageComponent,
    UnderDevPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
