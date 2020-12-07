import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaPhotoComponent } from './galleria-photo.component';

describe('GalleriaPhotoComponent', () => {
  let component: GalleriaPhotoComponent;
  let fixture: ComponentFixture<GalleriaPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriaPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
