import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoSidebarComponent } from './project-info-sidebar.component';

describe('ProjectInfoSidebarComponent', () => {
  let component: ProjectInfoSidebarComponent;
  let fixture: ComponentFixture<ProjectInfoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfoSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
