import { Component, OnInit, AfterViewInit } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
//import {ProjectInfoSidebarComponent } from '../project-info-sidebar.component'


@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit {


  mimapa: openlayersMap;
  //sidebar: ProjectInfoSidebarComponent;
  //sidebar2 = new ProjectInfoSidebarComponent({element: 'sidebar', position: 'left'})

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.mimapa = new openlayersMap('mapcanvas');
    //this.mimapa.map.addControl(this.sidebar)
  }
}
