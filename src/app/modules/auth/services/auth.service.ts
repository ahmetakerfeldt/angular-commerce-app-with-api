import { Injectable } from '@angular/core';
import {HttpService} from "../../../services/http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  async register(username: any, password: any){
    return this.http.post('/register', {username: username, password: password})
  }

  async login(username: any, password: any) {
    return this.http.post('/login', {username: username, password: password})
  }
}
