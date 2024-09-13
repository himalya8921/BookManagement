import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  public bookid:number = 0;
  public authorid:number = 0;
 constructor(private route:ActivatedRoute) { }

 ngOnInit() :void{
   console.log(this.route);
   this.route.firstChild.params.subscribe((param) =>{
   this.bookid =  param.bookid;
   this.authorid =  param.authorid;
   });
 }

}
