import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginPwdComponent} from "./login-pwd/login-pwd.component";
import {BooksComponent} from "@app/books/books.component";

const routes: Routes = [
  { path: '', component: LoginPwdComponent},
  { path: 'books', component: BooksComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
