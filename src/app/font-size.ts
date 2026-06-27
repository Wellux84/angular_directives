import {Directive, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true,
})
export class FontSize {
  appFontSize = input('');
  private el = inject(ElementRef);

  ngOnInit() {
    const fontSize = this.appFontSize();
    this.el.nativeElement.style.fontSize = fontSize;
  }
}