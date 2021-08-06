import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import Stamen from 'ol/source/Stamen';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';
import * as olProj from 'ol/proj';
import {Attribution, defaults as defaultControls} from 'ol/control';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
@Component({
  selector: 'app-mapsection',
  templateUrl: './mapsection.component.html',
  styleUrls: ['./mapsection.component.scss']
})
export class MapsectionComponent implements OnInit {

  public map;
  public nl = fromLonLat([4.490559, 51.928023]);
  public view = new View({
    center: this.nl,
    zoom: 7,
  });
  public osm = new TileLayer ({
    visible: true,
    opacity: 0.8,
    source: new Stamen({
      layer: 'watercolor',
    }),
    maxZoom: 18,

  });
  public garzaCoord = fromLonLat([-10.654678, 6.281704]);
  public attribution = new Attribution({
    collapsible: false,
  });
  public geom = new Point(olProj.fromLonLat(this.nl));
  public marker = new Feature(this.geom);
  public markers = new VectorLayer({
    source: new VectorSource({
      features: [this.marker]
    }),
    style: new Style({
      image: new Icon({
        anchor: [0.5, 46],
        src: '../../../../assets/icons/pin.png'
      })
    })
  })

  //https://openlayers.org/en/latest/examples/icon.html


  constructor() { }

  ngOnInit(): void {
    this.map = new Map ({
      target: 'map',
      layers: [this.osm],
      view: this.view,
      controls: defaultControls({attribution: false}).extend([this.attribution])
      //this.attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    });
  }

  onClick() {
    this.flyToGarza();
  }

  flyToGarza() {
    var flyAnimation = ((done) => {
      var duration = 4000;
      var zoom = this.view.getZoom();
      var parts = 2;
      var called = false;
      var callback = (complete) => {
        --parts;
        if (called) {
          return;
        }
        if (parts === 0 || !complete) {
          called = true;
          done(complete);
        }
        this.map.addLayer(this.markers);
        console.log(this.map);
      }
      this.view.animate(
        {
          center: this.garzaCoord,
          duration: duration,
        },
        callback
      );
      this.view.animate(
        {
          zoom: zoom - 1,
          duration: duration / 2,
        },
        {
          zoom: 12,
          duration: duration / 1.8,
        },
        callback
      );
    })();
  }

}
