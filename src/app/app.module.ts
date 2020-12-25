import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/landingpage/navbar/navbar.component';
import { HeaderComponent } from './components/landingpage/header/header.component';
import { AboutComponent } from './components/landingpage/about/about.component';
import { MapsectionComponent } from './components/landingpage/mapsection/mapsection.component';
import { TeamComponent } from './components/landingpage/team/team.component';
import { GuidelinesComponent } from './components/landingpage/guidelines/guidelines.component';
import { ContactComponent } from './components/landingpage/contact/contact.component';
import { FooterComponent } from './components/landingpage/footer/footer.component';
import { MapComponent } from './components/map/map/map.component';
import { PinselectorComponent } from './components/map/pinselector/pinselector.component';
import { CommunityComponent } from './components/landingpage/community/community.component';
import { PingpongComponent } from './components/landingpage/pingpong/pingpong.component';
import { ScrollmarkComponent } from './components/landingpage/scrollmark/scrollmark.component';
import { GalleriaComponent } from './components/landingpage/galleria/galleria.component';
import { GalleriaPhotosComponent } from './components/landingpage/galleria-photos/galleria-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    MapsectionComponent,
    TeamComponent,
    GuidelinesComponent,
    ContactComponent,
    FooterComponent,
    MapComponent,
    PinselectorComponent,
    CommunityComponent,
    PingpongComponent,
    ScrollmarkComponent,
    GalleriaComponent,
    GalleriaPhotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
