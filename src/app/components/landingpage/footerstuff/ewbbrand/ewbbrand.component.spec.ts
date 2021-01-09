import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EwbbrandComponent } from './ewbbrand.component';

describe('EwbbrandComponent', () => {
  let component: EwbbrandComponent;
  let fixture: ComponentFixture<EwbbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EwbbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EwbbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
