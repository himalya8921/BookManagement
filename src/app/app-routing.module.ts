import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { AllBooksComponent } from './public/component/all-books/all-books.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
   {path: '', redirectTo:'login',pathMatch:'full' },
   {path: 'allbooks', component: AllBooksComponent },
   {path: 'login', component: LoginComponent },
   {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
