import { NgModule } from '@angular/core';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule
    ],
    declarations: [EntrarComponent],
})
export class entrarModuleShared { }