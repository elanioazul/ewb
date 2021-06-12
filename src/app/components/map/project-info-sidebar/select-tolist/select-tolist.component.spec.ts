import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTolistComponent } from './select-tolist.component';

describe('SelectTolistComponent', () => {
  let component: SelectTolistComponent;
  let fixture: ComponentFixture<SelectTolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
