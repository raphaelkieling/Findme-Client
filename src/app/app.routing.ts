import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
    { path: 'home', loadChildren:'./views/home/home.module#HomeModule' },
    { path: 'entrar', loadChildren:'./views/entrar/entrar.module#EntrarModule' },
    { path: 'painel-controle', loadChildren:'./views/painel-controle/painel-controle.module#PainelControleModule' },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);