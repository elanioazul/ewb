import { Component, OnInit, Inject } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Imagen } from '../../types/photo';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public targetedPhoto: Imagen;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalComponent>,
    private photosList: PhotosService
    ) { }

  ngOnInit(): void {
    const findObjectInArrayByValue = function(arr: any, key:string, value: string) {
      const result = arr.filter((obj: any) => {
        return obj[key] === value;
      });
      return result.length > 0 ? result[0] : null;
    }
    var photoToOpen = findObjectInArrayByValue(this.photosList.photosArray, 'src', this.data);
    this.targetedPhoto = photoToOpen;
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

}
