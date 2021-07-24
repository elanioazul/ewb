import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('tipo de data set para el switch en template :' + this.sortOfDatasetFromList)
    // console.log('el id que viene de la lista es :' + JSON.stringify(this.featureFromList))
    // console.log('la feature que viene desde el mapa :' + JSON.stringify(this.featureFromMap))
    //console.log('simpleChanges obj :' + JSON.stringify(changes))
    console.log('changes.featureFromList.currentValue' + changes.featureFromList.currentValue)
    console.log('changes.featureFromList.previousValue' + changes.featureFromList.previousValue)
    console.log('changes.featureFromMap.currentValue' + changes.featureFromMap.currentValue)
    console.log('changes.featureFromMap.previousValue' + changes.featureFromMap.previousValue)


    // if(this.featureFromMap) {
    //   this.featureFromList = null;
    //   this.sortOfDatasetFromList = null
    // }
  }

}
