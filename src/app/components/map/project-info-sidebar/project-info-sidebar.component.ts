import { Component, ViewChild, ElementRef, TemplateRef, AfterViewInit, Inject, InjectionToken, OnDestroy } from "@angular/core";
import Sidebar from "../../../js/ol5-sidebar.js";
import { TemplateserviceService } from 'src/app/services/templateservice.service';

@Component({
  selector: 'sidebar',
  templateUrl: './project-info-sidebar.component.html',
  styleUrls: ['./project-info-sidebar.component.scss'],
})
export class ProjectInfoSidebarComponent implements AfterViewInit, OnDestroy {
  @ViewChild("sidebar") mySidebarDiv: ElementRef<HTMLElement>;
  @ViewChild("layers") switchLayersDiv: ElementRef<HTMLElement>;

  sidebar: Sidebar | null = null;

  div1?: any;
  div2?: any;

  constructor(private templateService: TemplateserviceService) {}

  ngAfterViewInit() {
    const element = this.mySidebarDiv.nativeElement;
    this.div1 = element;
    this.templateService.setTemplate(this.div1);

    const element2 = this.switchLayersDiv.nativeElement;
    this.div2 = element2;
    this.templateService.setTemplate(this.div2);
  }

  ngOnDestroy() {
    this.templateService.setTemplate();
  }
}
