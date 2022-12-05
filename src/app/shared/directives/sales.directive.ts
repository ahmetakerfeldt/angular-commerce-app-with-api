import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Directive({
  selector: '[Sales]'
})
export class SalesDirective implements OnInit{

  @Input() paths!: string | null | undefined | any | never

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.elRef.nativeElement.src = environment.cdnSalesUrl + this.paths
  }

}
