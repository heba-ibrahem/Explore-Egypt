import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { IProgram } from 'src/app/viewmodels/iprogram';
import { Location } from '@angular/common';
import { IUsers } from 'src/app/viewmodels/iusers';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  prog: IProgram| null = null;
  // program: any;
  programID: number = 0;
  CurrentUser: IUsers;
  constructor( private activatedRout: ActivatedRoute,private UserSevives: UsersServiceService, private city: CityService, private route: Router,  private location: Location) {
    this.CurrentUser = this.UserSevives.userValue;
    console.log(this.CurrentUser)
    
   }

  ngOnInit(): void {

  
    console.log('program details')
    this.activatedRout.paramMap.subscribe((params) => {
      let programIDParam: string | null = params.get('pID');
      let prgramID = (programIDParam) ? parseInt(programIDParam) : 0;
      
      this.getProgramByID(prgramID);
    },
      (err) => console.log(err)
    );

    // this.activatedRout.params.subscribe(data =>{
    //   this.programID = data.id;
    //   this.city.deleteProgram(this.programID).subscribe(data =>{
    //     console.log("deleted sucessfully")
    //   })

    // })
    
    
  }

  private getProgramByID(pID: number){
    this.city.getProgramByID(pID).subscribe(
      (res)=>{
        this.prog=res;
      },
      (err) =>{console.log(err)} 
    )
  }

  deleteProgram(id:any) {
    console.log("delet")
    if(confirm("Are you want to delete")){
      this.city.deleteProgram(id).subscribe(
        (res) => {
              console.log(res);
              this.route.navigate(['/home']);
              
            },
            (err) => { console.log(err) }
          
      )
    }
    // console.log(this.PorgramForm.value)
    // this.city.deleteProgram(this.programID).subscribe(
    //   (res) => {
    //     console.log(res);
    //     confirm("Are you want to delete")
        
    //   },
    //   (err) => { console.log(err) }
    // );
  }
  // edit(ID:number){
  //   this.route.navigate(['/editProgram', ID]);
  // }

}
