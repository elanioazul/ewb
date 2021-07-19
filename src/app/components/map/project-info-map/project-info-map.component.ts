import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { openlayersMap } from '../openlayers-map';
import { TemplateserviceService } from 'src/app/services/templateservice.service';
import { PdfService } from 'src/app/services/pdf.service';
import { pdf } from 'src/app/types/pdf';
import Sidebar from "../../../js/ol5-sidebar.js";
import LayerSwitcher from 'ol-layerswitcher';
import {
  RenderOptions,
 } from 'ol-layerswitcher';

import { filter, map, reduce } from "rxjs/operators";
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

  public targetedPdf: pdf;

  sidebarDiv?: ElementRef<HTMLElement>;
  layerSwitcherDiv?: ElementRef<HTMLElement>;
  domElement: any;
  templateArray: ElementRef<HTMLElement>[] = [];

  templateSubscription: Subscription;


  sidebar: Sidebar | null = null;
  layerSwitcher: LayerSwitcher | null = null;
  optionsToRenderLayerSwitcher: RenderOptions;

  currentFeature: any;

  clickedFeature: any;

  constructor(private templateService: TemplateserviceService, private pdfService: PdfService) {
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

    this.mimapa.map.addInteraction(this.mimapa.selectInteractionFeatures);
    this.mimapa.selectInteractionFeatures.on('select', (e) => {
      return this.renovateOverlayWhenOhterFeatureClicked(e)
    });

  }

  renovateOverlayWhenOhterFeatureClicked(e: any) {
    this.mimapa.updateOverlayToBlur();
    console.log("selected features : ", e.target.getFeatures());
    if (e.selected.length > 0) {
      this.clickedFeature = e.target.getFeatures().array_[0];
      let idClicked = this.clickedFeature.values_.id;
      let coodClicked = this.clickedFeature.values_.geometry.flatCoordinates;
      this.injectPDFinPopup(idClicked);
      this.mimapa.updateViewFlatCoord(coodClicked);
      this.mimapa.updateOverlayFlatCoord(coodClicked, idClicked, this.overlay);
    } else {
      return
    }

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
      this.injectPDFinPopup(id);
      this.mimapa.updateView(coordinates);
      this.sidebar.open("point-details");
      this.mimapa.updateOverlay(coordinates, id, this.overlay);
      //this.mimapa.selectInteractionFeatures.setActive(false);
    }
  }

  injectPDFinPopup(id:string) {
    const findObjectInArrayByValue = function(arr: any, key:string, value: string) {
      const result = arr.filter((obj: any) => {
        return obj[key] === value;
      });
      return result.length > 0 ? result[0] : null;
    };
    var pdfToOffer = findObjectInArrayByValue(this.pdfService.pdfsArray, 'id', id);
    this.targetedPdf = pdfToOffer;
    this.popupcontent.nativeElement.innerHTML = `
    <code> ${id} </code>
    <br>
    <a href="../../../assets/pdf/${this.targetedPdf.src}" download="pdf-${this.targetedPdf.id}">Download the file card</a>
    `;
  }

  onClick() {
    this.mimapa.updateOverlayToBlur();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.templateSubscription.unsubscribe();
  }
}
