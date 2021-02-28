import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { IHotel } from 'src/app/viewmodels/ihotel';
import { IProgram } from 'src/app/viewmodels/iprogram';
import { ITrain } from 'src/app/viewmodels/itrain';
import { IUsers } from 'src/app/viewmodels/iusers';


@Component({
  selector: 'app-desgin-program',
  templateUrl: './desgin-program.component.html',
  styleUrls: ['./desgin-program.component.scss']
})
export class DesginProgramComponent implements OnInit {

  PorgramForm: FormGroup;
  CityList: any[] = [];
  DestenationList: any[]=[];
  selectedCity: number = 1;
  selectedDestenation:number=1;
  hotelByCityID: IHotel[] = [];
  trainByCityID: ITrain[] = [];
  trainToDest: ITrain[]=[];
  selectedHotel: any[] = [];
  selectedTrain: any[] = [];
<<<<<<< HEAD
  CurrentUser: IUsers;
  program: IProgram ;
  id!: number;
  constructor(private fb: FormBuilder,private route: Router, private UserSevives: UsersServiceService, private city: CityService) {
=======
  CurrentUser: IUsers={};
  user_id :number =0;
  list: IProgram |null=null;
  constructor(private fb: FormBuilder, private UserSevives: UsersServiceService, private city: CityService) {
    if(localStorage.getItem('user')){
      this.user_id = this.UserSevives.getUserID();
      this.loadAccount();
    }
    else{
      this.CurrentUser = {};
    }
>>>>>>> 02183fee38105289cab0442750251d8a34ca0840
    this.PorgramForm = this.fb.group({
      programName: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      city:['', [Validators.required]],
      selHotel: [{ hotelName: "", roomPrice: "" }, [Validators.required]],
      selTrain: [{ trainNumber: 0, destination: "", ticketPrice: "" }, [Validators.required]],

    })
<<<<<<< HEAD
    this.CurrentUser = this.UserSevives.userValue;
    console.log(this.CurrentUser)
    this.program = {
      // "id": this.PorgramForm.value.id,
      userID: this.CurrentUser.id,
      programName: this.PorgramForm.value.programName,
      from: this.PorgramForm.value.from,
      to: this.PorgramForm.value.to,
      city:this.PorgramForm.value.city,
      selHotel: {
        hotelName: this.PorgramForm.value.selHotel.hotelName,
        roomPrice: this.PorgramForm.value.selHotel.roomPrice,
      },
      selTrain: {
        trainNumber: this.PorgramForm.value.selTrain.trainNumber,
        destination: this.PorgramForm.value.selTrain.destination,
        ticketPrice: this.PorgramForm.value.selTrain.ticketPrice,
      }

    }
=======
    // this.CurrentUser = this.UserSevives.userValue;
    // console.log(this.CurrentUser)
>>>>>>> 02183fee38105289cab0442750251d8a34ca0840
  }
  selectHotel(hotel: any) {
    this.selectedHotel = hotel.target.value
  }
  selectTrain(train: any) {
    this.selectedTrain = train.target.value
  }
 

  chooseCity(a: any) {
    // console.log('hotel')
    this.city.getHotelsByCityID(a.target.value).subscribe(
      (response) => {
        // console.log('hotel',this.hotelByCityID)
        this.hotelByCityID = response;
      },
      (err) => { console.log(err) }
    )

  }

  chooseTrain(train: any) {
    // console.log('Train')
    this.city.getTrainsByCityID(train.target.value).subscribe(
      (response) => {
        // console.log('Train',this.trainByCityID)
        this.trainByCityID = response;
      },
      (err) => { console.log(err) }
    )
    this.city.getTrainsBydest(train.target.value).subscribe(
      (response) => { 
        this.trainToDest = response;
      },
      (err) => { console.log(err) }
    )

  }

  ngOnInit(): void {

    this.city.getCity().subscribe(
      (response) => {
        this.CityList = response;
        // console.log(this.CityList)
      },
      (err) => { console.log(err) }
    )
  }
  save() {
    console.log("this.PorgramForm.value",this.PorgramForm.value)
    this.city.saveProgram(this.program).subscribe(
      (res) => {
        // console.log(res);
        // alert("saved")
        this.route.navigate(['/programDetails',this.id]);
      },
      (err) => { console.log(err) }
    );
  }
  async loadAccount(){
    (await this.UserSevives.getUserById(this.user_id))
      .subscribe(user=>{
        this.CurrentUser = user;
        console.log(this.CurrentUser)
      });
    }


}
