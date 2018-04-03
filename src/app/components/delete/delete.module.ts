import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeleteComponent],
  exports: [DeleteComponent]
})
export class DeleteModule { }
