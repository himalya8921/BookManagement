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
  public pid:number = 0;
  public title:string ='';
  public summary:string ='';

 constructor(private route:ActivatedRoute) { }

 ngOnInit() :void{
   console.log(this.route);
   this.route.params.subscribe((param) =>{
   this.bookid =  param.bookid;
   this.authorid =  param.authorid;
   });

   this.route.parent.params.subscribe((param) =>{
    this.pid =  param.pid;
    });

    //http://localhost:4200/public/69/book-details/1/author/test?summary=summm&title=songoficeandfire
    //this is query string, Riya moti ko aise samaj nahi aata
    this.route.queryParams.subscribe((queryParam) =>{
      this.title =  queryParam.title;
      this.summary =  queryParam.summary;
      });
 }
}
