import {
  Component,
  OnInit,
  Output,
  EventEmitter
 } from '@angular/core';

@Component({
  selector: 'app-project-info-sidebar-tabs',
  templateUrl: './project-info-sidebar-tabs.component.html',
  styleUrls: ['./project-info-sidebar-tabs.component.scss']
})
export class ProjectInfoSidebarTabsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
