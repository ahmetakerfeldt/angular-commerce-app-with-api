import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  spinner = false
  success = ''
  unSuccess = ''
  inputForm = this.fb.group({
    username: [''],
    password: [''],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    this.spinner = true
    this.authService.register(this.inputForm.value.username, this.inputForm.value.password).then((message) => {
      this.spinner = false

      const timerId = setTimeout(() => {
        this.success = message
      }, 2000)
      setInterval(() => {
        clearTimeout(timerId), this.success = ""
      }, 5000)
      this.success = message
    }).catch((err) => {
      this.spinner = false
      const timerId = setTimeout(() =>
        this.unSuccess = err.error, 400)
      setInterval(() => {
        clearTimeout(timerId), this.unSuccess = ""
      }, 6000)
    })
  }
}
