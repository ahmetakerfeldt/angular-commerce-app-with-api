import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HomeService} from "../../services/home.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  timer = false
  timeLeft: number = 11;
  interval: any

  spinner = false
  success = ''
  unSuccess = ''
  inputForm = this.fb.group({
    oldPassword: ['', Validators.required],
    newPassword: ['', [Validators.required]],
    newPasswordAgain: ['', [Validators.required, this.matchValidator('newPassword')]],
  })

  constructor(private fb: FormBuilder, private homeService: HomeService) {
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

  changePassword() {
    this.spinner = true
    setTimeout(() => this.spinner = false, 2000)

    /*if (this.inputForm.value.newPassword != this.inputForm.value.newPasswordAgain) {
      const timerId = setTimeout(() => {
        this.notEqual = 'You entered the new password repetition incorrectly!'
      }, 200)
      setInterval(() => {
        clearTimeout(timerId), this.notEqual = ''
      }, 5000)
    }*/

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Yes, change password'
    }).then(async (result) => {
      if (result.isConfirmed) {

        if (this.inputForm.invalid) return;

        const {value} = this.inputForm;

        return this.homeService.changePassword({
          newPassword: value.newPassword,
          oldPassword: value.oldPassword
        }).then((data) => {
          this.success = data
          this.spinner = false
          Swal.fire(
            'Changed!!',
            'Your password has been changed.',
            'success'
          )
        }).catch((err) => {

          if (err.error == "SequelizeValidationError: Validation error: Password length must be at least 5.") {

            this.timer = true
            this.inputForm.disable()
            this.timeLeft = 10
            this.spinner = false

            const timerId = setTimeout(() => {
              this.unSuccess = 'Password length must be at least 5.'
              this.startTimer()
            }, 1000)
            setInterval(() => {
              clearTimeout(timerId), this.unSuccess = '',
                window.location.reload()
            }, 11000)


            return
          }

          this.timer = true
          this.inputForm.disable()
          this.timeLeft = 10
          this.spinner = false

          const timerId = setTimeout(() => {
            this.unSuccess = err.error.split(':')[1]
            this.startTimer()
          }, 1000)
          setInterval(() => {
            clearTimeout(timerId), this.unSuccess = '',
              window.location.reload()
          }, 11000)
        });

      }
    })
  }

  private matchValidator(field: string) {
    return function (input: any) {
      if (!input.root || !input.root?.controls) {
        return null;
      }
      const match = input.value === input.root.value[field];

      return match ? null : {matchError: true};
    }
  }
}
