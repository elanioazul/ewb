import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-galleria-photos',
  templateUrl: './galleria-photos.component.html',
  styleUrls: ['./galleria-photos.component.scss']
})
export class GalleriaPhotosComponent implements OnInit {

  photos;
  photoId: string;

  constructor(private photosList: PhotosService) { }

  ngOnInit(): void {
    this.photos = this.photosList.photosArray;
  }

}
