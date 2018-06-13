import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderCustomComponent } from './loader-custom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderCustomComponent],
  exports: [LoaderCustomComponent]
})
export class LoaderCustomModule { }
