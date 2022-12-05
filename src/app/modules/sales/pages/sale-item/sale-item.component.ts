import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {FormBuilder, Validators} from "@angular/forms";
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {

  imagePath: any
  active = false
  unSuccess = ''
  url: any
  path: any
  selectedFile: any

  inputForm = this.fb.group({
    price: ['', Validators.required],
    explanation: ['', Validators.required]
  })


  constructor(private salesService: SalesService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  async getPhoto($event: any) {
    if ($event.target.files) {
      let reader = new FileReader()
      reader.readAsDataURL($event.target.files[0])
      reader.onload = (event: any) => {
        this.path = event.target.result
        if (this.path) {
          this.active = true
        }
      }
    }

    this.selectedFile = <File>$event.target.files[0]
  }

  async submitData() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to put something in the ad?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Yes',
      background: 'rgb(240, 240, 240)'
    }).then(async (result) => {
      if (result.isConfirmed) {

        let formData = new FormData()
        formData.append('image', this.selectedFile, this.selectedFile.name)

        const {value} = this.inputForm

        return this.salesService.saleItemPhoto(formData).then((path) => {
          this.imagePath = path
          return this.salesService.saleItem(value.price, value.explanation, this.imagePath).then(() => {
            Swal.fire(
              'Success!',
              'Your ad has been published!',
              'success'
            )
          })
        })
      }
    })
  }
}



