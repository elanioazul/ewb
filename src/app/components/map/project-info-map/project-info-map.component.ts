import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
import Control from 'ol/control/Control';
import { TemplateserviceService } from 'src/app/services/templateservice.service';


@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit {


  mimapa: openlayersMap;
  childTemplate?: ElementRef<HTMLElement>;

  public sidebarControl: Control;

  constructor(private templateService: TemplateserviceService) {
    // receive templates from the service and assign
    this.templateService.template$.subscribe(t => this.childTemplate = t);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.sidebarControl = new Control({
      element: this.templateService.template$
    })
    this.mimapa = new openlayersMap('mapcanvas');
    this.mimapa.map.addControl(this.sidebarControl);
  }
}
