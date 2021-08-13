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
import Icon from 'ol/style/Icon';
import { Stroke, Style, Fill, Text } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
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
  public superStyle = new Style({
    image: new Icon({
      anchorXUnits: IconAnchorUnits.PIXELS,
      anchorYUnits: IconAnchorUnits.PIXELS,
      opacity: 0.8,
      src: '../../../../assets/icons/pin.png'
      //src:  "data:image/svg+xml;base64," + btoa(mysymbol[i].textXML)
    }),
    text: new Text({
      text: 'Explore the project',
      fill: new Fill({color: 'black'}),
      stroke: new Stroke({color: 'white', width: 1}),
      offsetY: -20,
      offsetX: 10,
      font: "Courier New, monospace"

  })
  });
  public geom = new Point(this.garzaCoord);
  public marker = new Feature(this.geom);
  public markers = new VectorLayer({
    source: new VectorSource({
    })
  });


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
          this.marker.setStyle(this.superStyle)
          this.markers.getSource().addFeature(this.marker)
          this.map.addLayer(this.markers);
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
