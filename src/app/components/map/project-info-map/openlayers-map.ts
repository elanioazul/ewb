
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';


export class openlayersMap {

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
    title: 'OSMStandard',
    type: 'base',
    maxZoom: 18
  });
  public openStretMapHumanitarian = new TileLayer({
    source: new OSM({
      url: 'https://{a-c}.tile.openstreetmap.fr.hot/{z}{x}/{y}.png'
    }),
    tile: 'OSMHumanitarian',
    type: 'base'
  });

  constructor(id: string) {
    this.map = new Map ({
      target: id,
      layers: [this.osm],
      view: this.view,
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    });
  }

}