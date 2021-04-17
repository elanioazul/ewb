import { Component, ViewChild, ElementRef, TemplateRef, AfterViewInit, Inject, InjectionToken } from "@angular/core";
import Sidebar from "../../../js/ol5-sidebar.js";
import { TemplateserviceService } from 'src/app/services/templateservice.service';

const SIDEBAR_OPTS = new InjectionToken<SidebarOptions>('SIDEBAR_OPTS');

interface SidebarOptions {
  /* default: `left` */
  position?: string;
  target?: HTMLElement | string; // not sure what the correct type is here
}

const SIDEBAR_DI_CONFIG: SidebarOptions = {
  position: 'left'
};
@Component({
  selector: 'sidebar',
  templateUrl: './project-info-sidebar.component.html',
  styleUrls: ['./project-info-sidebar.component.scss'],
  providers: [{
    provide: SIDEBAR_OPTS,
    useValue: SIDEBAR_DI_CONFIG
  },]
})
export class ProjectInfoSidebarComponent implements AfterViewInit {
  @ViewChild("sidebar") mySidebarDiv: ElementRef<HTMLDivElement>;

  sidebar: Sidebar | null = null;

  childTemplate?: ElementRef<HTMLElement>;

  constructor(@Inject(SIDEBAR_OPTS) private options: SidebarOptions, private templateService: TemplateserviceService) {}

  ngAfterViewInit() {
    // get a reference to the `<div>` we just rendered to the DOM to pass to OLSidebar instance
    const element = this.mySidebarDiv.nativeElement;
    // get a reference to the same DOM element to pass to service
    this.childTemplate = this.mySidebarDiv;
    this.templateService.setTemplate(this.childTemplate)

    // create an OLSidebar instance, which handles everything from here
    this.sidebar = new Sidebar({
      element: element,
      position: this.options.position/*'left'*/,
      target: this.options.target,
    });
  }
}
