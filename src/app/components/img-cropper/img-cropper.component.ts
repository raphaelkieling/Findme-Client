import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.component.html',
  styleUrls: ['./img-cropper.component.css']
})
export class ImgCropperComponent implements OnInit {
  dataImage: any;
  cropperSettings: CropperSettings;

  constructor(
    private dialogRef: MatDialogRef<ImgCropperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 300;
    this.cropperSettings.croppedHeight = 300;
    this.cropperSettings.canvasWidth = 200;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.rounded = true;

    this.dataImage = {};
  }


  ngOnInit() { }

  salvar() {
    this.data.fn(this.dataImage.image).then(() => {
      this.dialogRef.close();
    })
  }

  fechar() {
    this.dialogRef.close();
  }
}
