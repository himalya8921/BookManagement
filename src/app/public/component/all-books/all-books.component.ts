import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
 
   public bookid:number = 0;
   public authorid:number = 0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() :void{

    console.log(this.route);
    // this.route.params.subscribe((param) =>{
    

    // });
  }

}
