import { Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective {

  constructor(private elementRef : ElementRef, private renderer: Renderer2) {

  }
  
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color' , 'pink');
  }

}
