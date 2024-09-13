import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent,
    children:[
      {path: 'login', component: LoginComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'signup', component: SignupComponent},
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
