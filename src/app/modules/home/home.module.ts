import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {AllSalesComponent} from './pages/all-sales/all-sales.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {ChangeUsernameComponent} from './components/change-username/change-username.component';
import {ChangeProfilePhotoComponent} from './components/change-profile-photo/change-profile-photo.component';
import {DeleteAccountComponent} from './components/delete-account/delete-account.component';
import {SharedModule} from "../../shared/shared.module";
import {ImageCropperModule} from "ngx-image-cropper";
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    AllSalesComponent,
    SettingsComponent,
    ChangePasswordComponent,
    ChangeUsernameComponent,
    ChangeProfilePhotoComponent,
    DeleteAccountComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ImageCropperModule,
  ]
})
export class HomeModule {
}
