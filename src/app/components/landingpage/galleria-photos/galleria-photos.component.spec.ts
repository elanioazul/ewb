import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaPhotosComponent } from './galleria-photos.component';

describe('GalleriaPhotosComponent', () => {
  let component: GalleriaPhotosComponent;
  let fixture: ComponentFixture<GalleriaPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriaPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
