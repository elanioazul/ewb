import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
import { TemplateserviceService } from 'src/app/services/templateservice.service';
import Sidebar from "../../../js/ol5-sidebar.js";
import LayerSwitcher from 'ol-layerswitcher';
import {
  RenderOptions,
 } from 'ol-layerswitcher';

import { filter, reduce } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit, OnDestroy {

  mimapa: openlayersMap;

  sidebarDiv?: ElementRef<HTMLElement>;
  layerSwitcherDiv?: ElementRef<HTMLElement>;
  domElement: any;
  templateArray: ElementRef<HTMLElement>[] = [];

  templateSubscription: Subscription;


  sidebar: Sidebar | null = null;
  layerSwitcher: LayerSwitcher | null = null;
  optionsToRenderLayerSwitcher: RenderOptions;

  constructor(private templateService: TemplateserviceService) {
    this.templateSubscription = this.templateService.template$.subscribe( domNode => {
      if (domNode) {
        this.templateArray.push(domNode)
      } else {
        this.templateArray = []
      }
    })
  }

  ngOnInit(): void {
  }

  setDivs() {
    this.templateArray.forEach(element => {
      if (element['className'] === 'sidebar collapsed') {
        this.sidebarDiv = element;
      } else if (element['className'] === 'layer-switcher') {
        this.layerSwitcherDiv = element
      }
    })
  }

  ngAfterViewInit() {
    this.mimapa = new openlayersMap('mapcanvas');

    this.setDivs();

    this.sidebar = new Sidebar({
      element: this.sidebarDiv
    });
    this.sidebar.setMap(this.mimapa.map);
    this.mimapa.map.addControl(this.sidebar);

    this.layerSwitcher = new LayerSwitcher({
      reverse: true,
      groupSelectStyle: 'children',
      activationMode: 'mouseover',
      startActive: false,
      label: '',
      collapseTipLabel: 'Collapse legend',
    });
    this.domElement = this.layerSwitcherDiv;
    LayerSwitcher.renderPanel(this.mimapa.map, this.domElement, { reverse: true})
    this.mimapa.map.addControl(this.layerSwitcher);

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.templateSubscription.unsubscribe();
  }
}
