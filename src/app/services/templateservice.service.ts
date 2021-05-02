import { Injectable, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateserviceService {

  private templateSource = new Subject<ElementRef<HTMLDivElement> | undefined>();

  template$ = this.templateSource.asObservable();

  constructor() { }

  setTemplate(template?: ElementRef<HTMLDivElement>) {
    //emitimos los valores con método next pq Subject es tbn Observer
    this.templateSource.next(template)
    //this.templateSource.complete()
  }
}
