import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from './comentario.component';
import { ComentarioService } from '../../services/core/comentario.service';
import { ComentarioModalComponent } from './comentario-modal/comentario-modal.component';
import { MatInputModule, MatListModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule,
    FlexModule,
    FormsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatDividerModule,
    BarRatingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [ComentarioComponent, ComentarioModalComponent],
  entryComponents: [ComentarioModalComponent],
  exports: [ComentarioComponent],
  providers: [ComentarioService]
})
export class ComentarioModule { }
