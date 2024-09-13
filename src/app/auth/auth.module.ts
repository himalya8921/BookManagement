import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ChangePasswordComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
    
  ]
})
export class AuthModule { }
