import {Directive, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true,
})
export class TextColor {
  appTextColor = input('');
  private el = inject(ElementRef);

  ngOnInit() {
    const color = this.appTextColor();
    this.el.nativeElement.style.color = color;
  }
}
