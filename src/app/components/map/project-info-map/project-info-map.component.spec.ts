import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoMapComponent } from './project-info-map.component';

describe('ProjectInfoMapComponent', () => {
  let component: ProjectInfoMapComponent;
  let fixture: ComponentFixture<ProjectInfoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
