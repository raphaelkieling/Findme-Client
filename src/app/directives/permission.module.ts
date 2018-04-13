import { PermissionDirective } from './permission.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ PermissionDirective ],
    exports:    [ PermissionDirective ]
})
export class PermissionModule { }