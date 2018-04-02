import { PrincipalComponent } from './principal/principal.component';
import { AsideComponent } from './../../components/aside/aside.component';
import { RouterModule, Routes } from '@angular/router';
import { PainelControleComponent } from './painel-controle.component';

const routes: Routes = [
    {
        path: '', component: PainelControleComponent, children: [
            { path: '', redirectTo: 'principal', pathMatch: 'full' },
            { path: 'principal', component: PrincipalComponent }
        ]
    },
];

export const painelRouting = RouterModule.forChild(routes);