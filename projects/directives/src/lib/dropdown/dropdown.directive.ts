import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[dvDropdown]',
  exportAs: 'dvDropdown'
})
export class DropdownDirective {
  @HostBinding('class.show') show = false;

  @HostListener('document:click', ['$event']) onElementClick(event: Event) {
    this.show = this.element.nativeElement.contains(event.target) ? !this.show : false;
  }

  constructor(private element: ElementRef) {
  }
}
