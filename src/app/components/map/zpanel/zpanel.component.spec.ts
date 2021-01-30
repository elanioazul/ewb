import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZpanelComponent } from './zpanel.component';

describe('ZpanelComponent', () => {
  let component: ZpanelComponent;
  let fixture: ComponentFixture<ZpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
