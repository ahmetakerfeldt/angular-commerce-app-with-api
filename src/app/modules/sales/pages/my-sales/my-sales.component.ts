import { Component, OnInit } from '@angular/core';
import {SalesService} from "../../services/sales.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.css']
})
export class MySalesComponent implements OnInit {

  disabled = true
  sales: any = []
  unSuccess = false
  constructor(private salesService: SalesService, private router: Router) { }

  async ngOnInit() {

    return this.salesService.getMySales().then((data)=> {
      this.sales = data
      if (this.sales[0] == null || undefined){
        this.unSuccess = true
      }
    })
  }


  deletePhoto(id: any) {
    return this.salesService.deleteSale(id).then(()=> {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your item successfully deleted.',
        showConfirmButton: false,
        timer: 1500
      })
      this.disabled = false

    })
  }

  async edit(item: any) {
    this.salesService.item = item
   return this.router.navigate(['/edit-sale'])
  }
}


