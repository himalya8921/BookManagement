import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { AllBooksComponent } from './public/component/all-books/all-books.component';


const routes: Routes = [
   {path: 'allbooks', component: AllBooksComponent },
   {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
