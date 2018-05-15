import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
  CommonModule,
    MatProgressSpinnerModule,
    FlexModule
  ],
  declarations: [PreloaderComponent],
  exports: [PreloaderComponent]
})
export class PreloaderModule { }
