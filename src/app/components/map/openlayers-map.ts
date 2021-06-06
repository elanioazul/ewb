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

import { WaterService } from '../../services/water.service';
import { SanitationService } from '../../services/sanitation.service';

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
  public waterExisitngPoints: VectorLayer;
  public waterPotentialPoints: VectorLayer;
  public waterOverlays: LayerGroup;

  public sanitationExisitngPoints: VectorLayer;
  public sanitationPotentialPoints: VectorLayer;
  public sanitationOverlays: LayerGroup;

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


  constructor(@Inject(String)id: string, public waterService: WaterService, public sanitationService: SanitationService){
    this.loadWaterDataFromServices();
    this.loadSanitationDataFromServices()
    this.map = new Map ({
      target: id,
      layers: [this.baseMaps, this.waterOverlays, this.sanitationOverlays],
      view: this.view,
      controls: [
        this.overviewMapControl,
        this.attribution,
        this.zoom
      ],
    });
  }

  loadWaterDataFromServices() {
    this.waterExisitngPoints = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(this.waterService.getWaterExistingData, {
          dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
        })
      }),
      title: 'Exisitng locations'
    } as BaseLayerOptions);
    this.waterPotentialPoints = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(this.waterService.getWaterPotentialData, {
          dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
        })
      }),
      title: 'Potential locations'
    } as BaseLayerOptions);
    this.waterOverlays = new LayerGroup({
      title: 'Water Facilities',
      layers: [
        this.waterExisitngPoints,
        this.waterPotentialPoints,
      ],
      fold: 'open'
    } as GroupLayerOptions);
  }

  loadSanitationDataFromServices() {
    this.sanitationExisitngPoints = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(this.sanitationService.getSanitationExistingData, {
          dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
        })
      }),
      title: 'Exisitng locations'
    } as BaseLayerOptions);
    this.sanitationPotentialPoints = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(this.sanitationService.getSanitationPotentialData, {
          dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
        })
      }),
      title: 'Potential locations'
    } as BaseLayerOptions);
    this.sanitationOverlays = new LayerGroup({
      title: 'Sanitation Facilities',
      layers: [
        this.sanitationExisitngPoints,
        this.sanitationPotentialPoints
      ],
      fold: 'open'
    } as GroupLayerOptions);
  }

}
