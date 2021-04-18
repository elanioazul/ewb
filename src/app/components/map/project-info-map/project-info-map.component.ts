import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
import { TemplateserviceService } from 'src/app/services/templateservice.service';
import Sidebar from "../../../js/ol5-sidebar.js";

@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit {

  mimapa: openlayersMap;
  childTemplate?: ElementRef<HTMLElement>;

  sidebar: Sidebar | null = null;

  constructor(private templateService: TemplateserviceService) {
    this.templateService.template$.subscribe(t => this.childTemplate = t);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.mimapa = new openlayersMap('mapcanvas');
    this.sidebar = new Sidebar({
      element: this.childTemplate
    });
    this.sidebar.setMap(this.mimapa.map);
    this.mimapa.map.addControl(this.sidebar);

  }
}
