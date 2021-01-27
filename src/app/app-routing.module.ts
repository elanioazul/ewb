import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage/landingpage.component';
import { MapComponent } from './components/map/map/map.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
