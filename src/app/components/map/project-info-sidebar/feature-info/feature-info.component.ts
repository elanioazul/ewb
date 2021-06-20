import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Feature } from 'ol';

@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['./feature-info.component.scss']
})
export class FeatureInfoComponent implements OnInit, OnChanges {

  @Input() feature: any;
  @Input() sortOfDataset: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('tipo de data set para el switch en template :' + this.sortOfDataset)
  }

}
