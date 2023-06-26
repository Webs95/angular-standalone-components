import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[customInput]',
  standalone: true
})
export class CustomInputDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus')
  onFocus() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid blue');
  }

  @HostListener('blur')
  onBlur() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid gray');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'type', 'password');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'type', 'text');
  }
}
