import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';

// Materialize
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        RouterModule,
        MatInputModule,
        MatDatepickerModule,
        MatStepperModule
    ],
    declarations: [
        HomeComponent,
        CadastroProfissionalComponent,
        CadastroClienteComponent
    ]
})
export class HomeModuleShared { }
