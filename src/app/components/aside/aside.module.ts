import { PermissionModule } from './../../directives/permission.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PermissionModule
  ],
  declarations: [AsideComponent],
  exports: [AsideComponent],
  providers: [LoginService]
})
export class AsideModule { }
