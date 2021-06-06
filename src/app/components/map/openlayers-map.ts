import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import SourceStamen from 'ol/source/Stamen';
import TileLayer from 'ol/layer/Tile';
import LayerTile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import LayerGroup from 'ol/layer/Group';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';
import { Attribution, OverviewMap, Control, Zoom } from 'ol/control';

import { waterExisitngPoints } from '../../data/water_existing';
import { waterPotentialPoints } from '../../data/water_potential';
import { sanitationExistingPoints } from '../../data/sanitation_existing';
import { sanitationPotentialPoints } from '../../data/sanitation_potential';

import {
  BaseLayerOptions,
  GroupLayerOptions
 } from 'ol-layerswitcher';

import { Injectable, Inject } from '@angular/core';

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
    zoom: 7
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
  public watercolor = new LayerTile({
    title: 'Water color',
    type: 'base',
    visible: false,
    source: new SourceStamen({
      layer: 'watercolor'
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
  } as BaseLayerOptions)
  public baseMaps = new LayerGroup({
    title: 'Base maps',
    layers: [this.osm, this.watercolor, this.google]
  } as GroupLayerOptions);

  //CapasOverlays
  public waterExisitngPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(waterExisitngPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Exisitng water points'
  } as BaseLayerOptions);
  public waterPotentialPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(waterPotentialPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Potential water points'
  } as BaseLayerOptions);
  public sanitationExisitngPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(sanitationExistingPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Exisitng sanitation points'
  } as BaseLayerOptions);
  public sanitationPotentialPoints = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(sanitationPotentialPoints, {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
      })
    }),
    title: 'Potential sanitation points'
  } as BaseLayerOptions);
  public overlays = new LayerGroup({
    title: 'Facilities locations',
    layers: [
      this.waterExisitngPoints,
      this.waterPotentialPoints,
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


  constructor(@Inject(String)id: string){
    this.map = new Map ({
      target: id,
      layers: [this.baseMaps, this.overlays],
      view: this.view,
      controls: [
        this.overviewMapControl,
        this.attribution,
        this.zoom
      ],
    });
  }

}
