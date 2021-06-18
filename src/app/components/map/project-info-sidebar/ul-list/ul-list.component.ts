import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() featureSelected: EventEmitter<Feature> = new EventEmitter()

  constructor(public waterS: WaterService, public sanitationS: SanitationService) { }



  ngOnInit(): void {
  }

  ngOnChanges() {
    this.determineWhatList();
  }
  determineWhatList() {
    switch (this.datasetToList) {
      case 'water-e':
        this.geoJsonToList = this.waterS.getWaterExistingData;
        break;
      case 'water-p':
        this.geoJsonToList = this.waterS.getWaterPotentialData;
        break;
      case 'sanitation-e':
        this.geoJsonToList = this.sanitationS.getSanitationExistingData;
        break;
      case 'sanitation-p':
        this.geoJsonToList = this.sanitationS.getSanitationPotentialData;
        break;
      default:
        break;
    }
    this.arrayOfFeaturesToList = this.geoJsonToList['features'];
  }

  onFeatureSelected(feature: Feature): void {
    console.log('onFeatureSelected is :' + JSON.stringify(feature));
    this.featureSelected.emit(feature)
  }

}
