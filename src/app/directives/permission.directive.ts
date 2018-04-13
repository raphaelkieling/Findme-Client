import { AuthService } from './../services/auth.service';
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[permission]'
})
export class PermissionDirective {

  @Input() permission: string;

  constructor(
    private el: ElementRef,
    private authS: AuthService,
  ) { }

  ngOnInit() {
    if (!this.authS.hasPermission(this.permission.split(','))) {
      this.el.nativeElement.remove();
    };
  }
}
