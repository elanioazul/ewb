import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-info-sidebar-content',
  templateUrl: './project-info-sidebar-content.component.html',
  styleUrls: ['./project-info-sidebar-content.component.scss']
})
export class ProjectInfoSidebarContentComponent implements OnInit {

  @Input() tabToShowContent: string;

  constructor() { }

  ngOnInit(): void {
  }

}
