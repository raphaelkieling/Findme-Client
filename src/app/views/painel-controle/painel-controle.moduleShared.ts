import { ClienteService } from './../../services/core/cliente.service';
import { MapPedidosDirective } from './../../directives/map-pedidos.directive';
import { PedidoRegisterComponent } from './pedido/pedido-register/pedido-register.component';
import { ImgCropperModule } from '../../components/img-cropper/img-cropper.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgmCoreModule } from '@agm/core';
import { DeleteModule } from './../../components/delete/delete.module';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DeleteComponent } from '../../components/delete/delete.component';
import { CategoriasSelectModule } from '../../components/categorias-select/categorias-select.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { ImgCropperComponent } from '../../components/img-cropper/img-cropper.component';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { MatIconModule } from '@angular/material/icon';
import { PedidoService } from '../../services/core/pedido.service';
import { PedidoComponent } from './pedido/pedido.component';
import { MzDatepickerModule } from 'ng2-materialize'
import { PermissionModule } from '../../directives/permission.module';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

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
    MzInputModule,
    MatProgressSpinnerModule,
    DeleteModule,
    CategoriasSelectModule,
    MatExpansionModule,
    AgmCoreModule,
    ImgCropperModule,
    PasswordStrengthBarModule,
    MatIconModule,
    MzDatepickerModule,
    PermissionModule,
    AgmJsMarkerClustererModule
  ],
  declarations: [
    PainelControleComponent,
    PrincipalComponent,
    ContaComponent,
    CategoriaComponent,
    CategoriaModalComponent,
    UsuariosComponent,
    PedidoComponent,
    PedidoRegisterComponent,
    MapPedidosDirective
  ],
  entryComponents: [
    CategoriaModalComponent,
    DeleteComponent,
    ImgCropperComponent,
    PedidoRegisterComponent
  ],
  providers: [CategoriaService, ProfissionalService, PedidoService, ClienteService]
})
export class PainelControleModuleShared { }
