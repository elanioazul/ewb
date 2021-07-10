import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
import { TemplateserviceService } from 'src/app/services/templateservice.service';
import Sidebar from "../../../js/ol5-sidebar.js";
import LayerSwitcher from 'ol-layerswitcher';
import {
  RenderOptions,
 } from 'ol-layerswitcher';

import { filter, reduce } from "rxjs/operators";
import { Subscription } from 'rxjs';
//import { Feature } from "ol";
import { Feature, FeatureCollection, GeoJSON as GeoJSON, Geometry, GeometryCollection, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'geojson';


@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit, AfterViewInit, OnDestroy {

  mimapa: openlayersMap;

  @ViewChild("popup") overlay: ElementRef<HTMLElement>;
  @ViewChild("popupcloser") popupcloser: ElementRef<HTMLElement>;
  @ViewChild("popupcontent") popupcontent: ElementRef<HTMLElement>;

  sidebarDiv?: ElementRef<HTMLElement>;
  layerSwitcherDiv?: ElementRef<HTMLElement>;
  domElement: any;
  templateArray: ElementRef<HTMLElement>[] = [];

  templateSubscription: Subscription;


  sidebar: Sidebar | null = null;
  layerSwitcher: LayerSwitcher | null = null;
  optionsToRenderLayerSwitcher: RenderOptions;

  currentFeature: any;

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
      reverse: false,
      groupSelectStyle: 'none',
      activationMode: 'click',
      startActive: false,
      label: '',
      collapseTipLabel: 'Collapse legend',
    });
    this.domElement = this.layerSwitcherDiv;
    LayerSwitcher.renderPanel(this.mimapa.map, this.domElement, { reverse: true})

  }

  handleFeatureToShareWithMap(feature: Feature) {
    console.log('onhandlingFeatureToShareWithMap, feature is :' + JSON.stringify(feature));
    this.currentFeature = feature;
    if (!this.mimapa) {
      return;
    }
    if (this.mimapa && this.currentFeature) {
      const {type, coordinates } = this.currentFeature.geometry;
      const id = this.currentFeature.properties.id;
      this.popupcontent.nativeElement.innerHTML = `
      <p>Point selected:</p><code> ${id} </code>
      `;
      this.mimapa.updateView(coordinates);
      this.mimapa.updateOverlay(coordinates, id, this.overlay);
    }
  }

  onClick() {
    this.mimapa.updateOverlayToBlur();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.templateSubscription.unsubscribe();
  }
}
