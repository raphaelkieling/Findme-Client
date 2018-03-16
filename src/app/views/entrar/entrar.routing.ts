import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar.component';

const routes: Routes = [
    { path: '', component: EntrarComponent },
];

export const entrarRouting = RouterModule.forChild(routes);