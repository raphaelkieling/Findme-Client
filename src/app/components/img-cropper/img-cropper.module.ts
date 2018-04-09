import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCropperComponent } from './img-cropper.component';
import { ImageCropperModule } from 'ng2-img-cropper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [ImgCropperComponent],
  exports: [ImgCropperComponent]
})
export class ImgCropperModule { }
