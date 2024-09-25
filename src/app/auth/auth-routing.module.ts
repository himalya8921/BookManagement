import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  // {path: 'auth', component: AuthComponent,
  //   children:[
      // {path: '', redirectTo:'login',pathMatch:'full' },
      {path: 'login', component: LoginComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'signup', component: SignupComponent},
  //   ]
  //  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
