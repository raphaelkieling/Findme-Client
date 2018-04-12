import { PedidoComponent } from './pedido/pedido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContaComponent } from './conta/conta.component';
import { PrincipalComponent } from './principal/principal.component';
import { AsideComponent } from './../../components/aside/aside.component';
import { RouterModule, Routes } from '@angular/router';
import { PainelControleComponent } from './painel-controle.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
    {
        path: '', component: PainelControleComponent, children: [
            { path: '', redirectTo: 'principal', pathMatch: 'full' },
            { path: 'principal', component: PrincipalComponent },
            { path: 'conta', component: ContaComponent },
            { path: 'categorias', component: CategoriaComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'pedidos', component: PedidoComponent }
        ]
    },
];

export const painelRouting = RouterModule.forChild(routes);