import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
import { EwbbrandComponent } from './components/landingpage/footerstuff/ewbbrand/ewbbrand.component';
import { ProjectComponent } from './components/landingpage/footerstuff/project/project.component';
import { AuthorityComponent } from './components/landingpage/footerstuff/authority/authority.component';
import { LandingpageComponent } from './components/landingpage/landingpage/landingpage.component';
import { NavComponent } from './components/map/nav/nav.component';
import { FootComponent } from './components/map/foot/foot.component';
import { ProjectInfoComponent } from './components/map/project-info/project-info.component';
import { ProjectInfoMapComponent } from './components/map/project-info-map/project-info-map.component';
import { ProjectInfoSidebarComponent } from './components/map/project-info-sidebar/project-info-sidebar.component';
import { ProjectInfoSidebarTabsComponent } from './components/map/project-info-sidebar-tabs/project-info-sidebar-tabs.component';
import { ProjectInfoSidebarContentComponent } from './components/map/project-info-sidebar-content/project-info-sidebar-content.component';


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
    EwbbrandComponent,
    ProjectComponent,
    AuthorityComponent,
    LandingpageComponent,
    NavComponent,
    FootComponent,
    ProjectInfoComponent,
    ProjectInfoMapComponent,
    ProjectInfoSidebarComponent,
    ProjectInfoSidebarTabsComponent,
    ProjectInfoSidebarContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
