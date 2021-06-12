import { Injectable } from '@angular/core';
import { sanitationExistingPoints } from '../data/sanitation_existing';
import { sanitationPotentialPoints } from '../data/sanitation_potential';
import { Feature, FeatureCollection, GeoJSON as GeoJSON, Geometry, GeometryCollection, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'geojson';


@Injectable({
  providedIn: 'root'
})
export class SanitationService {

  public sanitationExisting: GeoJSON = sanitationExistingPoints;
  public sanitationPotential: GeoJSON = sanitationPotentialPoints;

  constructor() { }

  get getSanitationExistingData(): GeoJSON {
    return this.sanitationExisting;
  }

  get getSanitationPotentialData(): GeoJSON {
    return this.sanitationPotential;
  }
}
