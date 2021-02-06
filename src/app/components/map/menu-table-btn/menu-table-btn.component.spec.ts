import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTableBtnComponent } from './menu-table-btn.component';

describe('MenuTableBtnComponent', () => {
  let component: MenuTableBtnComponent;
  let fixture: ComponentFixture<MenuTableBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTableBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTableBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
