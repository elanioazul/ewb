import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaMansonriComponent } from './galleria-mansonri.component';

describe('GalleriaMansonriComponent', () => {
  let component: GalleriaMansonriComponent;
  let fixture: ComponentFixture<GalleriaMansonriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriaMansonriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaMansonriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
