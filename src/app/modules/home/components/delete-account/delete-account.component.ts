import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeService} from "../../services/home.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  spinner = false
  unSuccess = ''
  inputForm = this.fb.group({
    reason: [''],
    password: [''],
    confirm: ['',[
      Validators.required,
      Validators.pattern("^CONFIRM$"),
    ]],
  })

  constructor(private fb: FormBuilder, private homeService: HomeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteAccount() {
    this.spinner = true

    setTimeout(()=> this.spinner = false, 2000)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Yes, delete account'
    }).then(async (result) => {
      if (result.isConfirmed) {

        const {value} = this.inputForm

        return this.homeService.deleteAccount({
          password: value.password,
          reason: value.reason,
          username: ''
        }).then((data) => {
          Swal.fire(
            'Deleted!',
            'Your account has been deleted. You are redirected to login.',
            'success'
          )
          localStorage.clear()
          setTimeout(()=> this.router.navigate(['/login']), 2000)
        }).catch((err) => {
          this.unSuccess = err.error.split(':')[1]
          console.log(err.message)
        })

      }
    })






  }
}
