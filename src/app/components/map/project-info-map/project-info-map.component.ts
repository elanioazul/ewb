import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';

@Component({
  selector: 'app-project-info-map',
  templateUrl: './project-info-map.component.html',
  styleUrls: ['./project-info-map.component.scss']
})
export class ProjectInfoMapComponent implements OnInit {

  public map;
  public garzaCoord = fromLonLat([-10.654678, 6.281704]);
  public view = new View({
    center: this.garzaCoord,
    zoom: 7,
  });
  public osm = new TileLayer ({
    visible: true,
    opacity: 0.8,
    source: new OSM(),
    maxZoom: 18
  });


  constructor() { }

  ngOnInit(): void {
    this.map = new Map ({
      target: 'mapcanvas',
      layers: [this.osm],
      view: this.view,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    });
    console.log('a ver que pasa')
  }

}
