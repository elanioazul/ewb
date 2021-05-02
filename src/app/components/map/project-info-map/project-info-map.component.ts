import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
import { TemplateserviceService } from 'src/app/services/templateservice.service';
import Sidebar from "../../../js/ol5-sidebar.js";
import LayerSwitcher from 'ol-layerswitcher';
import {
  RenderOptions,
 } from 'ol-layerswitcher';
 import Control from 'ol/control/Control';

@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit {

  mimapa: openlayersMap;
  sidebarDiv?: ElementRef<HTMLElement>;
  layerSwitcherDiv?: ElementRef<HTMLElement>;

  sidebar: Sidebar | null = null;
  layerSwitcher: LayerSwitcher | null = null;
  optionsToRenderLayerSwitcher: RenderOptions;

  constructor(private templateService: TemplateserviceService) {
    this.templateService.template$.subscribe(t => this.sidebarDiv = t);
    this.templateService.template$.subscribe(t => this.layerSwitcherDiv = t);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.mimapa = new openlayersMap('mapcanvas');

    this.sidebar = new Sidebar({
      element: this.sidebarDiv
    });
    this.sidebar.setMap(this.mimapa.map);
    this.mimapa.map.addControl(this.sidebar);

    this.layerSwitcher = new LayerSwitcher({
      reverse: true,
      groupSelectStyle: 'group'
    });
    var toc = this.layerSwitcherDiv;
    LayerSwitcher.renderPanel(this.mimapa.map, toc.nativeElement, { reverse: true})
    this.mimapa.map.addControl(this.layerSwitcher);

  }
}
