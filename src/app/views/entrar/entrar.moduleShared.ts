import { NgModule } from '@angular/core';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { LoginService } from '../../services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloaderModule } from '../../components/preloader/preloader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        FormsModule,
        ReactiveFormsModule,
        PreloaderModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        FlexModule,
        MatCheckboxModule,
        MatIconModule,
        AngularFireModule,
        AngularFireAuthModule
    ],
    declarations: [EntrarComponent],
    providers: [
        LoginService
    ]
})
export class entrarModuleShared { }