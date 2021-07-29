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

  public flipcoind: string = 'frommap' || 'fromlist';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.featureFromMap && changes.featureFromList) {
      this.flipcoind = 'fromlist'
    }
    if (changes.featureFromMap && !changes.featureFromList) {
      this.flipcoind = 'frommap'
    }
  }

}
