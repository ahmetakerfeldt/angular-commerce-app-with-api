import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from "./layouts/default-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((value) => value.AuthModule)
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [

      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then((value) => value.HomeModule)

      },
      {
        path:'',
        loadChildren: () => import('./modules/sales/sales.module').then((value)=>value.SalesModule)

      }


    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
