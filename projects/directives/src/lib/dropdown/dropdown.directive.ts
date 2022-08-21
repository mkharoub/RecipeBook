import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[dvDropdown]',
  exportAs: 'dvDropdown'
})
export class DropdownDirective {
  show = false;

  constructor() {
  }

  @HostListener('click') onElementClick() {
    this.show = !this.show;
  }
}
