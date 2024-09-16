import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }
 
  bookId : number = 2;

  ngOnInit() {
  }

 goToLogin(): void{
   this.router.navigate(['/auth/login']);
 }
//  public/:pid/book-details/:bookid/author/:authorid

goToBookDetails(id:number,bookid:number,authorid :number):void{
  this.router.navigate(['/public',id,'book-details',bookid,'author',authorid],
    {
      queryParams : {name:'Ustad',age:23}
    }
  )
}


}
