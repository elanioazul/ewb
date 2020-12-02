import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaModalComponent } from './galleria-modal.component';

describe('GalleriaModalComponent', () => {
  let component: GalleriaModalComponent;
  let fixture: ComponentFixture<GalleriaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
