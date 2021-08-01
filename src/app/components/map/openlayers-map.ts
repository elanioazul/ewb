import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import SourceStamen from 'ol/source/Stamen';
import TileLayer from 'ol/layer/Tile';
import LayerTile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import BingMaps from 'ol/source/BingMaps';
import GeoJSON from 'ol/format/GeoJSON';
import LayerGroup from 'ol/layer/Group';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';
import { Attribution, OverviewMap, Control, Zoom } from 'ol/control';
import Feature from 'ol/Feature';
import * as olCoordinate from 'ol/coordinate';
import Overlay from 'ol/Overlay';
import Select from 'ol/interaction/Select';
import * as olEvents from 'ol/events/condition';
//styles
import { Stroke, Style, Fill, Text } from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import RegularShape from 'ol/style/RegularShape';
import Icon from 'ol/style/Icon.js';

import { waterExisitngPoints } from '../../data/water_existing';
import { waterPotentialPoints } from '../../data/water_potential';
import { sanitationExistingPoints } from '../../data/sanitation_existing';
import { sanitationPotentialPoints } from '../../data/sanitation_potential';

import {
  BaseLayerOptions,
  GroupLayerOptions
 } from 'ol-layerswitcher';

import { Injectable, Inject, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root' // just before your class
})
export class openlayersMap {
  //esqueleto
  public map: Map;
  public garzaCoord = fromLonLat([-10.654678, 6.281704]);
  public view = new View({
    projection: 'EPSG:3857',
    center: this.garzaCoord,
    zoom: 13
  });

  //capasBase
  public osm = new LayerTile ({
    visible: true,
    opacity: 0.8,
    source: new OSM(),
    title: 'OpenStreetMap',
    type: 'base',
    maxZoom: 18
  } as BaseLayerOptions);
  public toner = new LayerTile({
    title: 'Toner',
    type: 'base',
    visible: false,
    source: new SourceStamen({
      layer: 'toner'
    })
  } as BaseLayerOptions);
  public google = new LayerTile({
    visible: true,
    opacity: 0.9,
    source: new OSM({
      'url': 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
    }),
    title: 'GoogleMaps',
    type: 'base',
    maxZoom: 18
  } as BaseLayerOptions);
  public bing = new TileLayer({
    title: 'Aerial',
    type: 'base',
    visible: false,
    preload: Infinity,
    source: new BingMaps({
      key: 'AuOnHkagHRMe9v1n1yJMNM0G4iyXee2OC_pWr4K9moD63ppuwCIsKAwKJUgEP9CR',
      imagerySet: 'Aerial',
      maxZoom: 18
    }),
  } as BaseLayerOptions);
  public baseMaps = new LayerGroup({
    title: 'Base maps',
    layers: [this.osm,this.google, this.bing, this.toner]
  } as GroupLayerOptions);

  //CapasOverlays
  //water
  public waterExisitngPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(waterExisitngPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Exisitng locations',
    style: new Style({
      image: new RegularShape({
          stroke: new Stroke({
              width: 1,
              color: [0, 144, 255, 1]
          }),
          fill: new Fill({
              color: [0, 144, 255, 0.7]
          }),
          points: 5,
          radius: 10,
          radius2: 4,
          angle: 0,
      })
    })
  } as BaseLayerOptions);
  public waterPotentialPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(waterPotentialPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Potential locations',
    style: new Style({
      image: new RegularShape({
          stroke: new Stroke({
              width: 1,
              color: [247, 8, 60, 1]
          }),
          points: 5,
          radius: 10,
          radius2: 4,
          angle: 0,
      })
    })
  } as BaseLayerOptions);

  public waterOverlays = new LayerGroup({
    title: 'Water Facilities',
    layers: [
      this.waterExisitngPoints,
      this.waterPotentialPoints,
    ],
    fold: 'open'
  } as GroupLayerOptions);
  //CapasOverlays
  //sanitation
  public sanitationExisitngPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(sanitationExistingPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Exisitng locations',
    style: new Style({
      image: new RegularShape({
        fill: new Fill({
          color: [0, 144, 255, 0.7]
        }),
        stroke: new Stroke({
          width: 1,
          color: [0, 144, 255, 1]
        }),
        points: 3,
        radius: 10,
        rotation: Math.PI / 4,
        angle: 0,
      }),
    }),
  } as BaseLayerOptions);
  public sanitationPotentialPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(sanitationPotentialPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Potential locations',
    style: new Style({
      image: new RegularShape({
        stroke: new Stroke({
          width: 1,
          color: [247, 8, 60, 1]
        }),
        points: 3,
        radius: 10,
        rotation: Math.PI / 4,
        angle: 0,
      }),
    }),
  } as BaseLayerOptions);

  public sanitationOverlays = new LayerGroup({
    title: 'Sanitation Facilities',
    layers: [
      this.sanitationExisitngPoints,
      this.sanitationPotentialPoints
    ],
    fold: 'open'
  } as GroupLayerOptions);

  //controles
  public overviewMapControl = new OverviewMap({
    className: 'ol-overviewmap ol-custom-overviewmap',
    layers: [
        new TileLayer({
            source: new OSM({
                'url': 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        })
    ],
    collapsed: true,
    tipLabel: 'Mapa de referencia',
    label: '«',
    collapseLabel: '»'
  })
  public attribution = new Attribution({
    collapsible: false,
  });
  public zoom = new Zoom();

  //interacting with sidebar logic, which sends a point ref to fly to
  public pointSelected: Feature;

  public select = null; // ref to currently selected interaction

  public basicStyle = new Style ({
    image: new CircleStyle ({
        radius: 9,
        stroke: new Stroke ({
            color: '#00fcf8'
        })
    })
  })

  public selectInteractionFeatures = new Select({
    condition: olEvents.click,
    layers: [this.waterExisitngPoints, this.waterPotentialPoints, this.sanitationExisitngPoints, this.sanitationPotentialPoints],
    style: this.basicStyle
  })

  constructor(@Inject(String)id: string){
    this.map = new Map ({
      target: id,
      layers: [this.baseMaps, this.waterOverlays, this.sanitationOverlays],
      view: this.view,
      controls: [
        this.overviewMapControl,
        this.attribution,
        this.zoom
      ]
    });
  }

  updateView(coordinates: olCoordinate.Coordinate): void {
    let newView = new View({
      center: fromLonLat(coordinates),
      zoom: 18
    });
    this.map.setView(newView);
  }

  updateViewFlatCoord(coordinates: olCoordinate.Coordinate): void {
    let newView = new View({
      center: coordinates,
      zoom: 18
    });
    this.map.setView(newView);
  }

  updateOverlay(coordinates: olCoordinate.Coordinate, id: string, div: ElementRef): void {
    let popup = new Overlay({
      element: div.nativeElement
    });
    this.map.addOverlay(popup);
    popup.setPosition(fromLonLat(coordinates));
  }

  updateOverlayFlatCoord(coordinates: olCoordinate.Coordinate, id: string, div: ElementRef): void {
    let popup = new Overlay({
      element: div.nativeElement
    });
    this.map.addOverlay(popup);
    popup.setPosition(coordinates);
  }

  updateOverlayToBlur(): void {
    let overlays = this.map.getOverlays();
    overlays.forEach(overlay => overlay.setPosition(undefined));
  }

  getInfoFromSelectedFeature() {

  }
}
