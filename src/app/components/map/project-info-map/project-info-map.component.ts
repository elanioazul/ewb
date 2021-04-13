import { Component, OnInit, AfterViewInit } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
import { ProjectInfoSidebarComponent } from '../project-info-sidebar/project-info-sidebar.component'


@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit {


  mimapa: openlayersMap;
  //sidebar = new ProjectInfoSidebarComponent({position: 'right'});
  //sidebar2 = new ProjectInfoSidebarComponent({ position: 'left'});
  //sidebar3: ProjectInfoSidebarComponent;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.mimapa = new openlayersMap('mapcanvas');
    //this.sidebar3 = new ProjectInfoSidebarComponent({position: 'left'});
    //this.mimapa.map.addControl(this.sidebar3);
  }
}
