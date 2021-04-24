import { Injectable } from '@angular/core';
import { Widget } from '../../app/types/widget';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  photosArray: Widget[] =[
    {
      id: 1,
      name: 'switch-layer'

    },
    {
      id: 2,
      name: 'show-data'
    },
    {
      id: 3,
      name: 'github'
    },
  ]

}
