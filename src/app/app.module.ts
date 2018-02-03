import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPwdComponent } from './login-pwd/login-pwd.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material";
import {reducers} from '@app/ngrx/reducers/reducers';
import {StoreModule} from "@ngrx/store";
import {UserEffects} from "@app/ngrx/effects/user.effects";
import {EffectsModule} from '@ngrx/effects';


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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
     UserEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
