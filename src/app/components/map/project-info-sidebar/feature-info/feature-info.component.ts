import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Feature } from 'ol';
import { FeatureClickedService } from '../../../../services/feature-clicked.service';

@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['./feature-info.component.scss']
})
export class FeatureInfoComponent implements OnInit, OnChanges {

  @Input() feature: any;
  @Input() sortOfDataset: string;

  constructor(private featureS: FeatureClickedService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('tipo de data set para el switch en template :' + this.sortOfDataset)
  }

}
