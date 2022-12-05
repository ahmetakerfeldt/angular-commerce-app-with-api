import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  spinner = false
  success = false
  unSuccess = ''
  inputForm = this.fb.group({
    username: [''],
    password: ['']
  })


  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {
  }


  async login() {
    this.spinner = true
    return this.authService.login(this.inputForm.value.username, this.inputForm.value.password).then((data) => {
      this.spinner = false
      localStorage.setItem('token', data.token)

      const timerId = setTimeout(() => {
        this.success = true
      }, 400)
      setInterval(() => {
        clearTimeout(timerId), this.success = false
      }, 5000)

      setTimeout(() => this.route.navigate(['/home']), 3000)


    }).catch((err) => {
      this.spinner = false
      const timerId = setTimeout(() => {
        this.unSuccess = err.error.split(':')[1]
      }, 500)
      setInterval(() => {
        clearTimeout(timerId), this.unSuccess = ''
      }, 4000)
    })
  }
}
