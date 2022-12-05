import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from "./pages/settings/settings.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {ChangeUsernameComponent} from "./components/change-username/change-username.component";
import {ChangeProfilePhotoComponent} from "./components/change-profile-photo/change-profile-photo.component";
import {DeleteAccountComponent} from "./components/delete-account/delete-account.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'settings/change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'settings/change-username',
    component: ChangeUsernameComponent
  },
  {
    path: 'settings/change-profile-photo',
    component: ChangeProfilePhotoComponent
  },
  {
    path: 'settings/delete-account',
    component: DeleteAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
