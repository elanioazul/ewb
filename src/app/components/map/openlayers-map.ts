
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';
import { defaults as defaultControls, Attribution, OverviewMap, Control } from 'ol/control';
import { ProjectInfoSidebarComponent } from './project-info-sidebar/project-info-sidebar.component';


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
    //title: 'OSMStandard',
    //type: 'base',
    maxZoom: 18
  });
  public openStretMapHumanitarian = new TileLayer({
    source: new OSM({
      url: 'https://{a-c}.tile.openstreetmap.fr.hot/{z}{x}/{y}.png'
    }),
    //title: 'OSMHumanitarian',
    //type: 'base'
  });

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
    tipLabel: 'Mapa de referencia'
  })

  public attribution = new Attribution({
    collapsible: false,
  });

  sidebarControl: ProjectInfoSidebarComponent;

  constructor(id: string) {
    this.map = new Map ({
      target: id,
      layers: [this.osm],
      view: this.view,
      controls: defaultControls().extend([
        this.overviewMapControl,
        this.attribution,
        //this.sidebarControl
      ]),
    });
  }

}
