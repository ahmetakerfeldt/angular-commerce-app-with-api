import { Component, OnInit } from '@angular/core';
import {SalesService} from "../../services/sales.service";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent implements OnInit {

  null = false
  item: any = ''
  imagePath: any
  inputForm = this.fb.group({
    price: [''],
    explanation: ['']
  })

  constructor(private salesService: SalesService, private fb: FormBuilder, private router: Router) { }

  async ngOnInit() {
    this.item = this.salesService.item
    this.imagePath = this.item.imagePath
    if (!this.imagePath){
      this.null = true
    }
  }

  async change() {
    const {value} = this.inputForm
    return this.salesService.changeItem({
      price: value.price,
      explanation: value.explanation
    }, this.item.price, this.item.explanation, this.item.id).then(()=> {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(()=> this.router.navigate(['/my-sales']), 1500)
    })
  }
}
