import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPwdComponent } from './login-pwd/login-pwd.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {reducers} from '@app/ngrx/reducers/reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UserService} from '@app/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    LoginPwdComponent
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
    EffectsModule.forRoot([]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
