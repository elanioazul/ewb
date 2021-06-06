import { GeoJSON } from 'geojson';

export const sanitationExistingPoints: GeoJSON =  {
  "type": "FeatureCollection",
  "features": [
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -10.65615046,6.285006185 ]
   },
   "properties": {
   "id":"MEN1-7SGSB7",
   "kind":"pit latrine",
   "filledout":"Yes",
   "inuse":"Yes",
   "stuckblocked":"No",
   "isprotected":"unprotected. poop migrates through the soil",
   "year":2003,
   "coveredwhenfloods":"Yes",
   "fee":"No"
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -10.65562592,6.285325116 ]
   },
   "properties": {
   "id":"MEN1-7SGU3N",
   "kind":"pit latrine",
   "filledout":"Yes",
   "inuse":"Yes",
   "stuckblocked":"No",
   "isprotected":"unprotected. poop migrates through the soil",
   "year":2003,
   "coveredwhenfloods":"Yes",
   "fee":"No"
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -10.6554289,6.2866922 ]
   },
   "properties": {
   "id":"MENnyosie-7TMEGG",
   "kind":"pit latrine",
   "filledout":"Yes",
   "inuse":"No, no anymore",
   "stuckblocked":"Yes",
   "isprotected":"unprotected. poop migrates through the soil",
   "year":2006,
   "coveredwhenfloods":"No",
   "fee":"No"
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -10.6560877,6.2862492 ]
   },
   "properties": {
   "id":"MENnyosie-7TMFCF",
   "kind":"pit latrine",
   "filledout":"Yes",
   "inuse":"No, no anymore",
   "stuckblocked":"Yes",
   "isprotected":"unprotected. poop migrates through the soil",
   "year":2006,
   "coveredwhenfloods":"No",
   "fee":"No"
   }
 }
  ]
}
