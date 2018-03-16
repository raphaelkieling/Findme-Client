import { NgModule } from '@angular/core';
import { EntrarComponent } from './entrar.component';
import { entrarRouting } from './entrar.routing';
import { entrarModuleShared } from './entrar.moduleShared';

@NgModule({
  imports: [
    entrarRouting,
    entrarModuleShared
  ]
})
export class EntrarModule { }
