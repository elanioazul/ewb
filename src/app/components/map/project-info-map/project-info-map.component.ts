import { Component, OnInit, AfterViewInit } from '@angular/core';
import { openlayersMap } from '../openlayers-map'

@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit {


  map: openlayersMap

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.map = new openlayersMap('mapcanvas')
  }
}
