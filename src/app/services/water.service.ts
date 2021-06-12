
import { Injectable } from '@angular/core';
import { waterExisitngPoints } from '../data/water_existing';
import { waterPotentialPoints } from '../data/water_potential';
import { Feature, FeatureCollection, GeoJSON as GeoJSON, Geometry, GeometryCollection, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'geojson';


@Injectable({
  providedIn: 'root'
})
export class WaterService {

  public waterExisting: GeoJSON = waterExisitngPoints;
  public waterPotential: GeoJSON = waterPotentialPoints;

  constructor() { }

  get getWaterExistingData(): GeoJSON {
    return this.waterExisting;
  }

  get getWaterPotentialData(): GeoJSON {
    return this.waterPotential;
  }
}
