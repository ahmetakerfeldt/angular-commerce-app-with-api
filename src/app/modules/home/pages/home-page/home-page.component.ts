import {Component, OnInit} from '@angular/core';
import {SalesService} from "../../../sales/services/sales.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  empty = false
  allSales: any = []

  constructor(private salesService: SalesService, private router: Router) {
  }

  async ngOnInit() {
    return this.salesService.getAllSales().then((data) => {
      this.allSales = data
      if (this.allSales[0] == null || undefined) {
        this.empty = true
      }
    })
  }

  async buyItem(item: any) {
    return this.salesService.buyItem({
      price: item.price,
      explanation: item.explanation,
      createdAt: item.createdAt,
      id: item.id,
      imagePath: item.imagePath
    }).then((data) => {

      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: data,
        showConfirmButton: false,
        timer: 1500
      })

      if (data == "Error: You cannot buy your item!") {
        return
      }
      setTimeout(()=> this.router.navigate(['/my-buys']), 2000)

    })
  }
}
