import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCustomComponent } from './navbar-custom.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginService } from '../../services/login.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PermissionModule } from '../../directives/permission.module';
import { MatMenuModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    MatButtonModule,
    PermissionModule,
    MatMenuModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  declarations: [NavbarCustomComponent],
  exports: [NavbarCustomComponent],
  providers: [LoginService]
})
export class NavbarCustomModule { }
