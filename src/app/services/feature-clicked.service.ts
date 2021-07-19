import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureClickedService {

  private featureName: string;

  constructor() { }

  public get infoFeatureInMapClicked() {
    return this.featureName;
  }

  public set infoFeatureInMapClicked(val) {
    this.featureName = val;
  }
}
