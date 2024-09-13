import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

 
  public bookid:number = 0;
  public authorid:number = 0;
 constructor(private route:ActivatedRoute) { }

 ngOnInit() :void{

   console.log(this.route);
   this.route.params.subscribe((param) =>{
   this.bookid =  param.bookid;
   this.authorid =  param.authorid;
   });
 }
}
