import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasmapComponent } from './canvasmap.component';

describe('CanvasmapComponent', () => {
  let component: CanvasmapComponent;
  let fixture: ComponentFixture<CanvasmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
