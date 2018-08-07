import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[rainBlue]'
})
export class CustomDirectiveDirective implements OnInit{

  // custom directive using ElementRef

  // constructor(private elementRef: ElementRef ) {
    
  //  }

  // ngOnInit(){
  //   this.elementRef.nativeElement.style.color = 'green';
  // }

  // custom directive using Render2

  constructor(private elementRef:ElementRef, private renderer:Renderer2){
    
  }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'cyan');
  }

}
