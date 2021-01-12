import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';
import Control from 'ol/control/Control';
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
    source: new OSM(),
    maxZoom: 18
  });
  public garzaCoord = fromLonLat([-10.654678, 6.281704]);

  constructor() { }

  ngOnInit(): void {
    this.map = new Map ({
      target: 'map',
      layers: [this.osm],
      view: this.view,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
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
      function callback(complete) {
        --parts;
        if (called) {
          return;
        }
        if (parts === 0 || !complete) {
          called = true;
          done(complete);
        }
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
