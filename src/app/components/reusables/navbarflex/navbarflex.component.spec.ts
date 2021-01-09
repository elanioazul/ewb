import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarflexComponent } from './navbarflex.component';

describe('NavbarflexComponent', () => {
  let component: NavbarflexComponent;
  let fixture: ComponentFixture<NavbarflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
