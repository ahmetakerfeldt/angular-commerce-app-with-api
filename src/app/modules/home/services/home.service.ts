import {Injectable} from '@angular/core';
import {HttpService} from "../../../services/http.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpService) {
  }

  async changePassword(body: { oldPassword: string | null | undefined; newPassword: string | null | undefined }) {
    return this.http.patch('/change-password', body);
  }

  async changeUsername(body: { password: string | null | undefined; newUsername: string | null | undefined }) {
    return this.http.patch('/change-username', body)
  }

  async deleteAccount(body: { reason: string | null | undefined; password: string | null | undefined; username: string }) {
    return this.http.post('/delete-account', body)
  }

  async getPhoto() {
    return this.http.get('/change-photo')
  }

  async uploadFile(formData: any) {
    return this.http.post('/change-photo', formData)
  }

  async deleteFile() {
    return this.http.delete('/change-photo')
  }

}
