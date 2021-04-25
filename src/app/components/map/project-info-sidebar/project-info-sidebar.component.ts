import { Component, ViewChild, ElementRef, Input, AfterViewInit, Inject, InjectionToken } from "@angular/core";
import Sidebar from "../../../js/ol5-sidebar.js";
import { TemplateserviceService } from 'src/app/services/templateservice.service';

@Component({
  selector: 'sidebar',
  templateUrl: './project-info-sidebar.component.html',
  styleUrls: ['./project-info-sidebar.component.scss'],
})
export class ProjectInfoSidebarComponent implements AfterViewInit {

  @ViewChild("sidebar") mySidebarDiv: ElementRef<HTMLElement>;
  sidebar: Sidebar | null = null;
  childTemplate?: any;

  public tab: string;
  public tabToBeOpened: string;

  constructor(private templateService: TemplateserviceService) {}

  ngAfterViewInit() {
    const element = this.mySidebarDiv.nativeElement;
    this.childTemplate = element;
    this.templateService.setTemplate(this.childTemplate)
  }

  tabSelected(id: string) {
    this.tab = id;
    this.tabToBeOpened = id;
  }
}
