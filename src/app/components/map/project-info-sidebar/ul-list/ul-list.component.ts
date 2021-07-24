import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { WaterService } from '../../../../services/water.service';
import { SanitationService } from '../../../../services/sanitation.service';
import { Feature, FeatureCollection, GeoJSON as GeoJSON, Geometry, GeometryCollection, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'geojson';

@Component({
  selector: 'app-ul-list',
  templateUrl: './ul-list.component.html',
  styleUrls: ['./ul-list.component.scss']
})
export class UlListComponent implements OnInit, OnChanges {

  @Input() datasetToList: string;
  public geoJsonToList: GeoJSON;
  public arrayOfFeaturesToList: Array<object>;

  @Output() featureSelected: EventEmitter<Feature> = new EventEmitter();

  public highlightFeature : Number;

  constructor(public waterS: WaterService, public sanitationS: SanitationService) { }



  ngOnInit(): void {
  }

  ngOnChanges() {
    this.determineWhatList();
    this.highlightFeature = null;
  }
  determineWhatList() {
    switch (this.datasetToList) {
      case 'water existing locations':
        this.geoJsonToList = this.waterS.getWaterExistingData;
        break;
      case 'water potential locations':
        this.geoJsonToList = this.waterS.getWaterPotentialData;
        break;
      case 'sanitation exisiting locations':
        this.geoJsonToList = this.sanitationS.getSanitationExistingData;
        break;
      case 'sanitation potential locations':
        this.geoJsonToList = this.sanitationS.getSanitationPotentialData;
        break;
      default:
        break;
    }
    this.arrayOfFeaturesToList = this.geoJsonToList['features'];
  }

  onFeatureSelected(feature: Feature, index: number): void {
    this.featureSelected.emit(feature);
    this.highlightFeature = index;
  }

}
