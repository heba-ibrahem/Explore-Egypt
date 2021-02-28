import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../Services/city.service';
import { UsersServiceService } from '../Services/users-service.service';
import { IHotel } from '../viewmodels/ihotel';
import { IProgram } from '../viewmodels/iprogram';
import { ITrain } from '../viewmodels/itrain';
import { IUsers } from '../viewmodels/iusers';

@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.scss']
})
export class EditProgramComponent implements OnInit {

  programID: number = 0;
  prog: IProgram| null = null;
  PorgramForm: FormGroup;
  CityList: any[] = [];
  selectedCity: number = 1;
  hotelByCityID: IHotel[] = [];
  trainByCityID: ITrain[] = [];
  selectedHotel: any[]=[];
  CurrentUser: IUsers={};
  user_id :number =0;
  list: IProgram |null=null 
  constructor(private fb: FormBuilder ,private UserSevives: UsersServiceService,private activatedRout: ActivatedRoute, private city: CityService, private route: Router) {
    if(localStorage.getItem('user')){
      this.user_id = this.UserSevives.getUserID();
      this.loadAccount();
    }
    else{
      this.CurrentUser = {};
    }
    this.PorgramForm = this.fb.group({
      from: ['', [Validators.required ]],
      to: ['', [Validators.required]],
      selHotel:[{hotelName:"value", roomPrice:"value"}, [Validators.required]],
      selTrain:[{trainNumber:0, destination:"value", ticketPrice:"value"}, [Validators.required]],

    })
    // this.CurrentUser = this.UserSevives.userValue;
    // console.log(this.CurrentUser)
  
  }
  selectHotel(hotel:any){
    
    this.selectedHotel= hotel.target.value
  }
  selectTrain(train:any){
    this.selectedHotel= train.target.value
  }

  chooseCity(a:any) {
    console.log(a.target.value);
    // console.log('hotel')
    this.city.getHotelsByCityID(a.target.value).subscribe(
      (response) => {
        console.log('hotel')
        console.log(this.selectedCity)
        console.log(this.hotelByCityID)
        this.hotelByCityID = response;
      },
      (err) => { console.log(err) }
    )

  }

  chooseTrain(train:any) {
    console.log(train.target.value);
    // console.log('Train')
    this.city.getTrainsByCityID(train.target.value).subscribe(
      (response) => {
        console.log('Train')
        console.log(this.selectedCity)
        console.log("sdsd", this.hotelByCityID)
        this.trainByCityID = response;
      },
      (err) => { console.log(err) }
    )

  }
 


  ngOnInit(): void {
    this.city.getCity().subscribe(
      (response) => {
        this.CityList = response;
        console.log(this.CityList)
      },
      (err) => { console.log(err) }
    )
    this.activatedRout.params.subscribe(data =>{
      this.programID = data.id;
      this.city.viewProgram(this.programID).subscribe(programData =>{
        this.prog = programData
      })

    })
  }

  edit() {
    console.log("update")
    console.log(this.PorgramForm.value)
    this.list = {
      // "id": this.PorgramForm.value.id,
      userID: this.CurrentUser.id,
      from: this.PorgramForm.value.from,
      to: this.PorgramForm.value.to,
      selHotel: {
        hotelName: this.PorgramForm.value.selHotel.hotelName,
        roomPrice: this.PorgramForm.value.selHotel.roomPrice,
      },
      selTrain: {
        trainNumber: this.PorgramForm.value.selTrain.trainNumber,
        destination: this.PorgramForm.value.selTrain.destination,
        ticketPrice: this.PorgramForm.value.selTrain.ticketPrice,
      }}
    this.city.editProgram(this.programID, this.list).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/editProgram',this.programID ]);
        
      },
      (err) => { console.log(err) }
    )
    }
    async loadAccount(){
     (await this.UserSevives.getUserById(this.user_id))
        .subscribe(user=>{
          this.CurrentUser = user;
          console.log(this.CurrentUser)
        });
      }

}
