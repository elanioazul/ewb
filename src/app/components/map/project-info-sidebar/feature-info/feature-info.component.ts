import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Feature } from 'ol';

@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['./feature-info.component.scss']
})
export class FeatureInfoComponent implements OnInit, OnChanges {

  @Input() featureFromList: any;
  @Input() sortOfDatasetFromList: string;

  @Input() featureFromMap: any;
  // @Input() sortOfDatasetFromMap: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('tipo de data set para el switch en template :' + this.sortOfDatasetFromList)
    console.log('el id que viene de la lista es :' + JSON.stringify(this.featureFromList))
    console.log('la feature que viene desde el mapa :' + JSON.stringify(this.featureFromMap))
  }

}
