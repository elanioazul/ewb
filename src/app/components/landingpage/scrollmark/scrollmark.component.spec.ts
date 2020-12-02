import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollmarkComponent } from './scrollmark.component';

describe('ScrollmarkComponent', () => {
  let component: ScrollmarkComponent;
  let fixture: ComponentFixture<ScrollmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
