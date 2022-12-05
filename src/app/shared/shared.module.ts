import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageDirective} from "./directives/image.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SalesDirective } from './directives/sales.directive';


@NgModule({
  declarations: [
    ImageDirective,
    SalesDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ImageDirective,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SalesDirective,
  ]
})
export class SharedModule {
}
