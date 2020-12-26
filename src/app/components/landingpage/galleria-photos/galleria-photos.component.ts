import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../../../reusables/modal/modal.component';

@Component({
  selector: 'app-galleria-photos',
  templateUrl: './galleria-photos.component.html',
  styleUrls: ['./galleria-photos.component.scss']
})
export class GalleriaPhotosComponent implements OnInit {

  photos;
  photoId: string;

  constructor(
    private photosList: PhotosService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.photos = this.photosList.photosArray;
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "100vw";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

}
