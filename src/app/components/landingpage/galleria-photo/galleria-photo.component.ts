import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-galleria-photo',
  templateUrl: './galleria-photo.component.html',
  styleUrls: ['./galleria-photo.component.scss']
})
export class GalleriaPhotoComponent implements OnInit {

  photos;

  constructor(private photosList: PhotosService) { }

  ngOnInit(): void {
    this.photos = this.photosList.photosArray;
  }

}
