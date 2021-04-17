import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateserviceService {

  private templateSource = new Subject<TemplateRef<any> | undefined>();

  template$ = this.templateSource.asObservable()

  constructor() { }

  setTemplate(template?: TemplateRef<any>) {
    this.templateSource.next(template)
  }
}
