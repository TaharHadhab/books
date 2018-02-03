import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginPwdComponent} from "./login-pwd/login-pwd.component";

const routes: Routes = [
  { path: '', component: LoginPwdComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
