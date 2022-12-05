import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Directive({
  selector: '[Image]'
})
export class ImageDirective implements OnInit{

  @Input() paths!: string | null |undefined

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.elRef.nativeElement.src = environment.cdnUrl + this.paths
  }

}
