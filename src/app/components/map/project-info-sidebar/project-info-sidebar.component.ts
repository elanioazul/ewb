import { Component, ViewChild, ElementRef, Input, AfterViewInit, Inject, InjectionToken, OnDestroy } from "@angular/core";
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

  datasetsOptions: any = ['water-e', 'water-p', 'sanitation-e', 'sanitation-p'];
  datasetSelected: string;

  constructor(private templateService: TemplateserviceService) {}

  ngAfterViewInit() {
    const element = this.sidebarDiv.nativeElement;
    this.divSidebar = element;
    this.templateService.sendTemplate(this.divSidebar);

    const element2 = this.switchLayersDiv.nativeElement;
    this.divSwitcher = element2;
    this.templateService.sendTemplate(this.divSwitcher);
  }

  processSelection(selection: string) {
    this.datasetsOptions.find(element => {
      if (element.localeCompare(selection) == 0) {
        this.datasetSelected = selection
        return this.datasetSelected
      } else {
        this.datasetSelected = ''
      }
    });
  }

  ngOnDestroy() {
    this.templateService.sendTemplate();
  }
}
