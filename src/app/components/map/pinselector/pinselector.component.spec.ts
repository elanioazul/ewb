import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinselectorComponent } from './pinselector.component';

describe('PinselectorComponent', () => {
  let component: PinselectorComponent;
  let fixture: ComponentFixture<PinselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
