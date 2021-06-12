import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlListComponent } from './ul-list.component';

describe('UlListComponent', () => {
  let component: UlListComponent;
  let fixture: ComponentFixture<UlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
