import { Component, OnInit } from '@angular/core';
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-my-buys',
  templateUrl: './my-buys.component.html',
  styleUrls: ['./my-buys.component.css']
})
export class MyBuysComponent implements OnInit {

  empty = false
  myBuys: any = []

  constructor(private salesService: SalesService) { }

  async ngOnInit() {
    return this.salesService.getMyBuys().then((data)=> {
      this.myBuys = data
      if (data[0] == null || undefined) {
        this.empty = true
      }
    })
  }
}
