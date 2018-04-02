import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AsideModule } from './../../components/aside/aside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelControleComponent } from './painel-controle.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    AsideModule,
    MatCardModule,
    RouterModule
  ],
  declarations: [PainelControleComponent,PrincipalComponent]
})
export class PainelControleModuleShared { }
