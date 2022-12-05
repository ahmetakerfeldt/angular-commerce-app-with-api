import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-change-profile-photo',
  templateUrl: './change-profile-photo.component.html',
  styleUrls: ['./change-profile-photo.component.css']
})
export class ChangeProfilePhotoComponent implements OnInit {

  active = false
  unSuccess = ''
  url: any
  path: any
  selectedFile: any

  constructor(private homeService: HomeService, public fb: FormBuilder) {


  }

  async ngOnInit() {
    this.path = await this.homeService.getPhoto()
  }

  async getFile($event: any) {

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
      text: "Do you want change profile photo?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Change photo'
    }).then(async (result) => {
      if (result.isConfirmed) {

        let formData = new FormData()
        formData.append('image', this.selectedFile, this.selectedFile.name)
        return this.homeService.uploadFile(formData).then((data) => {
          Swal.fire(
            'Changed!',
            'Your profile photo has been changed.',
            'success'
          )
        })
      }
    })
  }

  async deletePhoto() {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Yes, delete'
    }).then(async (result) => {
      if (result.isConfirmed) {

        return this.homeService.deleteFile().then(() => {
          Swal.fire(
            'Deleted!',
            'Your profile photo has been deleted.',
            'success'
          )
        }).catch((err) => {
          const timerId = setTimeout(() => {
            this.unSuccess = err.error.split(':')[1]
          }, 100)
          setInterval(() => {
            clearTimeout(timerId), this.unSuccess = ''
          }, 5000)
        })
      }
    })
  }
}
