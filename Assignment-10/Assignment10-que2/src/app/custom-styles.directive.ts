import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyles]',
  standalone: true
})
export class CustomStylesDirective {

  constructor(private obj : ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.background = 'Yellow';
    this.obj.nativeElement.style.bold;
  }

}
