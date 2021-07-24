import { Component, ViewChild, ElementRef, Output, Input, EventEmitter, AfterViewInit, Inject, InjectionToken, OnDestroy } from "@angular/core";
import Sidebar from "../../../js/ol5-sidebar.js";
import { TemplateserviceService } from 'src/app/services/templateservice.service';
import { Feature } from "ol";

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

  datasetsOptions: any = ['water existing locations', 'water potential locations', 'sanitation exisiting locations', 'sanitation potential locations'];
  datasetSelected: string;
  currentFeature: Feature;
  @Output() featureToBubbleUp: EventEmitter<Feature> = new EventEmitter();
  @Input() featureFromMap: any;

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

  handleFeatureChange(feature: Feature) {
    this.featureToBubbleUp.emit(feature);
    this.currentFeature = feature;
  }

  ngOnDestroy() {
    this.templateService.sendTemplate();
  }
}
