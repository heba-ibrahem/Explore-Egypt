import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/Services/home.service';
import { IExpiorEgyptHome } from 'src/app/ViewModels/iexpior-egypt-home';


@Component({
  selector: 'app-explor-egypt-home',
  templateUrl: './explor-egypt-home.component.html',
  styleUrls: ['./explor-egypt-home.component.scss']
})
export class ExplorEgyptHomeComponent implements OnInit {
  List:IExpiorEgyptHome[]|null=null;
  subscribtion: Subscription[]=[];
  
  constructor(private service:HomeService,
               private router:Router) {}

  ngOnInit(): void {
    this.subscribtion[0]= this.service.getAllpages().subscribe(
      (response)=>{
        this.List=response;
      },
      (err)=>{console.log(err)}
    );
   

  }
  PagesDetilies(id:number){
      switch(id){
        case 2:{
          this.router.navigate(['/neighbourhoods'])
          break;
        }
        case 3:{
          this.router.navigate(['/culture'])
          break;
        }
        case 4:{
          this.router.navigate(['/about'])
          break;
        } default:{
          this.router.navigate(['**'])
          break;
        }
      }
    
  } 

}
