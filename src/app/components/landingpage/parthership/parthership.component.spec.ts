import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParthershipComponent } from './parthership.component';

describe('ParthershipComponent', () => {
  let component: ParthershipComponent;
  let fixture: ComponentFixture<ParthershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParthershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParthershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
