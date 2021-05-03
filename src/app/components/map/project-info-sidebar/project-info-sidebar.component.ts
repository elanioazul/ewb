import { Component, ViewChild, ElementRef, TemplateRef, AfterViewInit, Inject, InjectionToken, OnDestroy } from "@angular/core";
import Sidebar from "../../../js/ol5-sidebar.js";
import { TemplateserviceService } from 'src/app/services/templateservice.service';

@Component({
  selector: 'sidebar',
  templateUrl: './project-info-sidebar.component.html',
  styleUrls: ['./project-info-sidebar.component.scss'],
})
export class ProjectInfoSidebarComponent implements AfterViewInit, OnDestroy {
  @ViewChild("sidebar") sidebarDiv: ElementRef<HTMLElement>;
  @ViewChild("layers") switchLayersDiv: ElementRef<HTMLElement>;

  sidebar: Sidebar | null = null;

  divSidebar?: any;
  divSwitcher?: any;

  constructor(private templateService: TemplateserviceService) {}

  ngAfterViewInit() {
    const element = this.sidebarDiv.nativeElement;
    this.divSidebar = element;
    this.templateService.sendTemplate(this.divSidebar);

    const element2 = this.switchLayersDiv.nativeElement;
    this.divSwitcher = element2;
    this.templateService.sendTemplate(this.divSwitcher);
  }

  ngOnDestroy() {
    this.templateService.sendTemplate();
  }
}
