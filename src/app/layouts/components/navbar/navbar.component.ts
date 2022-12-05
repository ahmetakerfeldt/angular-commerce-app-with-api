import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {HomeService} from "../../../modules/home/services/home.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  path: any

  constructor(private router: Router, private homeService: HomeService) {
  }

  async ngOnInit() {
    this.path = await this.homeService.getPhoto()

  }

  async logOut() {
    localStorage.clear()
    await this.router.navigate([''])
  }
}
