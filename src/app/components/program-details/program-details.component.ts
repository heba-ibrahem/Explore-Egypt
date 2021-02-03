import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { IProgram } from 'src/app/viewmodels/iprogram';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  prog: IProgram| null = null;
  program: any[]=[];
  progID:number=0;
  constructor( private UserSevives: UsersServiceService, private city: CityService) { }

  ngOnInit(): void {

    // console.log('program details')
    // this.city.getprogramByUserID(this.selectedCity).subscribe(
    //   (response) => {
    //     console.log('dcfnfkjn')
    //     console.log(this.selectedCity)
    //     console.log(this.hotelByCityID)
    //     this.hotelByCityID = response;
    //   },
    //   (err) => { console.log(err) }
    // )
    console.log('program details')
    this.city.getProgramByID().subscribe(
      (res)=>{
        this.program=res;
      },
      (err) =>{console.log(err)} 
    )
  }

  
  
    
  

}
