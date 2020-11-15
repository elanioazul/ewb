import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsectionComponent } from './mapsection.component';

describe('MapsectionComponent', () => {
  let component: MapsectionComponent;
  let fixture: ComponentFixture<MapsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
