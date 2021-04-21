import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoSidebarContentComponent } from './project-info-sidebar-content.component';

describe('ProjectInfoSidebarContentComponent', () => {
  let component: ProjectInfoSidebarContentComponent;
  let fixture: ComponentFixture<ProjectInfoSidebarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfoSidebarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoSidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
