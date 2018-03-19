import { NgModule } from '@angular/core';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { LoginService } from '../../services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloaderModule } from '../../components/preloader/preloader.module';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        FormsModule,
        ReactiveFormsModule,
        PreloaderModule
    ],
    declarations: [EntrarComponent],
    providers: [LoginService]
})
export class entrarModuleShared { }