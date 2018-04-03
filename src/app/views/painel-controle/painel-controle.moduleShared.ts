import { CategoriaModalComponent } from './categoria/categoria-modal/categoria-modal.component';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from './../../services/core/categoria.service';
import { EnderecoModule } from './../../components/endereco/endereco.module';
import { ContaComponent } from './conta/conta.component';
import { UsuarioFormModule } from './../../components/usuario-form/usuario-form.module';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AsideModule } from './../../components/aside/aside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelControleComponent } from './painel-controle.component';
import { MatCardModule } from '@angular/material/card';
import { InfoPessoalModule } from '../../components/info-pessoal/info-pessoal.module';
import { PreloaderModule } from '../../components/preloader/preloader.module';
import { ProfissionalService } from '../../services/core/profissional.service';
import { MatTableModule } from '@angular/material/table';
import { CategoriaComponent } from './categoria/categoria.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MzInputModule } from 'ng2-materialize'

@NgModule({
  imports: [
    CommonModule,
    AsideModule,
    MatCardModule,
    RouterModule,
    InfoPessoalModule,
    UsuarioFormModule,
    MatCardModule,
    PreloaderModule,
    EnderecoModule,
    FormsModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MzInputModule
  ],
  declarations: [
    PainelControleComponent,
    PrincipalComponent,
    ContaComponent,
    CategoriaComponent,
    CategoriaModalComponent
  ],
  entryComponents: [
    CategoriaModalComponent
  ],
  providers: [CategoriaService, ProfissionalService]
})
export class PainelControleModuleShared { }
