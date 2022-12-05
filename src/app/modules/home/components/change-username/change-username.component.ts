import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeService} from "../../services/home.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {

  timer = false
  timeLeft: number = 11;
  interval: any

  spinner = false
  unSuccess = ''
  inputForm = this.fb.group({
    newUsername: ['', Validators.required],
    password: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private homeService: HomeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      if (this.timeLeft < 0) {
        this.inputForm.enable()
        this.timer = false
      }
    }, 1000)
  }

  async changeUsername() {
    this.spinner = true

    setTimeout(() => this.spinner = false, 2000)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Yes, change'
    }).then(async (result) => {
      if (result.isConfirmed) {

        const {value} = this.inputForm

        return this.homeService.changeUsername({
          newUsername: value.newUsername,
          password: value.password
        }).then(() => {
          Swal.fire(
            'Changed!',
            'Your username has been changed, please login again.',
            'success'
          )
          localStorage.clear()
          setTimeout(() => this.router.navigate(['/login']), 2000)
        }).catch((err) => {

          if (err.error == "SequelizeValidationError: Validation error: Username must be 4-20 character.") {
            this.inputForm.disable()
            this.startTimer()
            const timerId = setTimeout(() => {

              this.unSuccess = 'Username must be 4-20 character.'
            }, 1000)
            setInterval(() => {
              clearTimeout(timerId), this.unSuccess = '',
                window.location.reload()
            }, 11000)
            return


          }


          this.inputForm.disable()
          this.startTimer()
          const timerId = setTimeout(() => {

            this.unSuccess = err.error.split(':')[1]
          }, 1000)
          setInterval(() => {
            clearTimeout(timerId), this.unSuccess = '',
              window.location.reload()
          }, 11000)
        }).catch(() => {
        });
      }
    })
  }
}
