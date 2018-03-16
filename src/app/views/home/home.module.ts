import { NgModule } from '@angular/core';
import { homeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { HomeModuleShared } from './home.moduleShared';
@NgModule({
  imports: [
    homeRouting,
    HomeModuleShared
  ]
})
export class HomeModule { }
