import { UsuarioService } from './../../services/core/usuario.service';
import { PainelControleModuleShared } from './painel-controle.moduleShared';
import { painelRouting } from './painel-controle.routing';
import { AsideModule } from './../../components/aside/aside.module';
import { NgModule } from '@angular/core';
import { PainelControleComponent } from './painel-controle.component';

@NgModule({
  imports: [
    painelRouting,
    PainelControleModuleShared
  ],
  declarations: [],
  providers: [UsuarioService]
})
export class PainelControleModule { }
