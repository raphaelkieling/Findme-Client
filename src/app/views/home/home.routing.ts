import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastro-profissional', component: CadastroProfissionalComponent },
    { path: 'cadastro-cliente', component: CadastroClienteComponent }
];

export const homeRouting = RouterModule.forChild(routes);