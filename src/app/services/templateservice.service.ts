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
    this.templateSource.next(template)
  }
}
