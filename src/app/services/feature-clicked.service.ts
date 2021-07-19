import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureClickedService {

  private featureName: string;
  private featureSortOf: string;

  constructor() { }

  public get nameInfoInMapClicked() {
    return this.featureName;
  }

  public set nameInfoInMapClicked(val) {
    this.featureName = val;
  }

  public get sortOfInfoInMapClicked() {
    return this.featureSortOf;
  }

  public set sortOfInfoInMapClicked(val) {
    this.featureSortOf = val;
  }
}
