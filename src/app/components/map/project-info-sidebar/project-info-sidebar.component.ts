import { Component, ViewChild, ElementRef, AfterViewInit, Inject, InjectionToken } from "@angular/core";
import Sidebar from "../../../js/ol5-sidebar.js";

const SIDEBAR_OPTS = new InjectionToken<SidebarOptions>('SIDEBAR_OPTS');

interface SidebarOptions {
  /* default: `left` */
  position?: string;
  target: HTMLElement | string; // not sure what the correct type is here
}

@Component({
  selector: "sidebar",
  template: "<div #sidebar></div>",
})
export class ProjectInfoSidebarComponent implements AfterViewInit {
  @ViewChild("sidebar") mySidebarDiv: ElementRef<HTMLDivElement>;

  sidebar: Sidebar | null = null;

  constructor(@Inject(SIDEBAR_OPTS) private options: SidebarOptions) {}

  ngAfterViewInit() {
    // get a reference to the `<div>` we just rendered to the DOM
    const element = this.mySidebarDiv.nativeElement;

    // create an OLSidebar instance, which handles everything from here
    this.sidebar = new Sidebar({
      element,
      target: this.options.target,
    });
  }
}
