import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/landingpage/navbar/navbar.component';
import { HeaderComponent } from './components/landingpage/header/header.component';
import { AboutComponent } from './components/landingpage/about/about.component';
import { MapsectionComponent } from './components/landingpage/mapsection/mapsection.component';
import { TeamComponent } from './components/landingpage/team/team.component';
import { GuidelinesComponent } from './components/landingpage/guidelines/guidelines.component';
import { ContactComponent } from './components/landingpage/contact/contact.component';
import { MapComponent } from './components/map/map/map.component';
import { CommunityComponent } from './components/landingpage/community/community.component';
import { ScrollmarkComponent } from './components/landingpage/scrollmark/scrollmark.component';
import { GalleriaComponent } from './components/landingpage/galleria/galleria.component';
import { GalleriaPhotosComponent } from './components/landingpage/galleria-photos/galleria-photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent as ModalComponent } from './reusables/modal/modal.component';
import { ParthershipComponent } from './components/landingpage/parthership/parthership.component';
import { FootergridComponent } from './components/reusables/footergrid/footergrid.component';
import { NavbarflexComponent } from './components/reusables/navbarflex/navbarflex.component';
import { EwbbrandComponent } from './components/landingpage/footerstuff/ewbbrand/ewbbrand.component';
import { ProjectComponent } from './components/landingpage/footerstuff/project/project.component';
import { AuthorityComponent } from './components/landingpage/footerstuff/authority/authority.component';
import { LandingpageComponent } from './components/landingpage/landingpage/landingpage.component';
import { CanvasmapComponent } from './components/map/canvasmap/canvasmap.component';


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
    MapComponent,
    CommunityComponent,
    ScrollmarkComponent,
    GalleriaComponent,
    GalleriaPhotosComponent,
    ModalComponent,
    ParthershipComponent,
    FootergridComponent,
    NavbarflexComponent,
    EwbbrandComponent,
    ProjectComponent,
    AuthorityComponent,
    LandingpageComponent,
    CanvasmapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
