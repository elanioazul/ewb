import { Injectable, ElementRef } from '@angular/core';
import { Observable } from 'ol';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateserviceService {

  private templateSource = new Subject<ElementRef<HTMLElement> | undefined>();

  template$ = this.templateSource.asObservable();

  constructor() { }

  setTemplate(template?: ElementRef<HTMLElement>) {
    this.templateSource.next(template)
  }
}
