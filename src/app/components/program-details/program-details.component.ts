import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { IProgram } from 'src/app/ViewModels/iprogram';
import { Location } from '@angular/common';
import { IUsers } from 'src/app/ViewModels/iusers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  prog: IProgram| null = null;
  programID: number = 0;
  user_id :number =0;
  CurrentUser: IUsers={};
  constructor( private activatedRout: ActivatedRoute,private UserSevives: UsersServiceService, private city: CityService, private route: Router,
    // private toastr: ToastrService
    ) {
    if(localStorage.getItem('user')){
      this.user_id = this.UserSevives.getUserID();
      this.loadAccount();
    }
    else{
      this.CurrentUser = {};
    }
   
    // this.CurrentUser = this.UserSevives.userValue;
    // console.log(this.CurrentUser)
    
   }

  ngOnInit(): void {

    console.log('program details')
    this.activatedRout.paramMap.subscribe((params) => {
      let programIDParam: string | null = params.get('pID');
      let prgramID = (programIDParam) ? parseInt(programIDParam) : 0;
      
      this.getProgramByID(prgramID);
    },
      (err) => {console.log(err)
      
    }
    );

  }

  private getProgramByID(pID: number){
    this.city.getProgramByID(pID).subscribe(
      (res)=>{
        this.prog=res;
      },
      (err) =>{console.log(err)
        // alert("no program found")
        this.route.navigateByUrl('/home')} 
    )
  }

  deleteProgram(id:any) {
    console.log("delet")
    console.log(id);
    
    // if(confirm("Are you want to delete")){
      this.city.deleteProgram(id).subscribe(
        (res) => {
          console.log(res);
          this.route.navigate(['/account/dashboard']).then(() => {
            window.location.reload();
            // this.toastr.success(' The program has been deleted successfuly')
          });       
        },
        (err) =>  console.log(err),
          // this.toastr.error(' There is an error') 
        
          
      )
    // }
  }

  async loadAccount(){
     (await this.UserSevives.getUserById(this.user_id))
      .subscribe(user=>{
        this.CurrentUser = user;
        console.log(this.CurrentUser)
      });
    }

}



