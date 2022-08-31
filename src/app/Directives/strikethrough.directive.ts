import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private element: ElementRef) { }
  
  textStyling(action: string) {

    this.element.nativeElement.style.textDecoration = action;
    
  }

  @HostListener('click') onClicks() {
    this.textStyling('line-through')
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.textStyling("none");
  }

}
