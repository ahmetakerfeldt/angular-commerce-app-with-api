import {Injectable} from '@angular/core';
import {HttpService} from "../../../services/http.service";

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  item: any = ''
  constructor(private http: HttpService) {
  }


  async saleItemPhoto(formData: any) {
    return this.http.post('/sale-item/upload', formData)
  }

  async saleItem(price: string | null | undefined, explanation: string | null | undefined, imagePath: any) {
    return this.http.post(`/sale-item`, {price, explanation, imagePath})

  }

  async getMySales(){
    return  this.http.get('/my-sales')
  }

  async deleteSale(id: any) {
    return this.http.delete('/my-sales', {id: id})
  }

  async getAllSales() {
    return this.http.get('/all-sales')
  }

  async buyItem(body: {}){
    return this.http.patch('/all-sales', body)
  }

  async getMyBuys() {
    return this.http.get('/my-buys')
  }

  async changeItem(body: {price: any, explanation: any}, price: any, explanation: any, id: any) {
    return this.http.patch('/change-item', body,{price: price, explanation: explanation, id: id})
  }

}
