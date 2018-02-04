import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPwdComponent } from './login-pwd/login-pwd.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {reducers} from '@app/ngrx/reducers/reducers';
import {StoreModule} from '@ngrx/store';
import {UserService} from '@app/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import { BooksComponent } from './books/books.component';
import {BooksService} from "@app/services/books.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginPwdComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    MatCardModule
  ],
  providers: [UserService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
