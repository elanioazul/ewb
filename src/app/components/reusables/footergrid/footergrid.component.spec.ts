import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootergridComponent } from './footergrid.component';

describe('FootergridComponent', () => {
  let component: FootergridComponent;
  let fixture: ComponentFixture<FootergridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootergridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
