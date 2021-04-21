import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoSidebarTabsComponent } from './project-info-sidebar-tabs.component';

describe('ProjectInfoSidebarTabsComponent', () => {
  let component: ProjectInfoSidebarTabsComponent;
  let fixture: ComponentFixture<ProjectInfoSidebarTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfoSidebarTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoSidebarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
