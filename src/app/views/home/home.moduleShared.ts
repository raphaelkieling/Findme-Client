import { EnderecoModule } from './../../components/endereco/endereco.module';
import { UsuarioFormModule } from './../../components/usuario-form/usuario-form.module';
import { InfoPessoalModule } from './../../components/info-pessoal/info-pessoal.module';
import { ProfissionalService } from './../../services/core/profissional.service';
import { FormsModule } from '@angular/forms';
import { PreloaderModule } from './../../components/preloader/preloader.module';
import { CategoriaService } from './../../services/core/categoria.service';
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
        MatStepperModule,
        PreloaderModule,
        FormsModule,
        InfoPessoalModule,
        UsuarioFormModule,
        EnderecoModule
    ],
    declarations: [
        HomeComponent,
        CadastroProfissionalComponent,
        CadastroClienteComponent
    ],
    providers:[
        CategoriaService,
        ProfissionalService
    ]
})
export class HomeModuleShared { }
