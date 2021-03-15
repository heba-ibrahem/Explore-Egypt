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

  // flitering
  Trains: ITrain[]=[];
  trainByCityFilter!: string;

  PorgramForm: FormGroup;
  CityList: any[] = [];
  DestenationList: any[]=[];
  selectedhotelCity: number = 1;
  selectedCity: number = 1;
  selectedDestenation:number=1;
  hotelByCityID: IHotel[] = [];
  trainByCityID: ITrain[] = [];
  trainToDest: ITrain[]=[];
  selectedHotel: any[] = [];
  selectedTrain: any[] = [];
  CurrentUser: IUsers={};
  user_id :number =0;
  program: IProgram ;
  id!: number;
  constructor(private fb: FormBuilder,private route: Router, private UserSevives: UsersServiceService, private city: CityService) {
    if(localStorage.getItem('user')){
      this.user_id = this.UserSevives.getUserID();
      this.loadAccount();
    }
    else{
      this.CurrentUser = {};
    }
    this.PorgramForm = this.fb.group({
      userID: [this.user_id,[Validators.required]],
      programName: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      cityID:[0,[Validators.required]],
      fromCityID:['',[Validators.required]],
      toCityID:['',[Validators.required]],
      // img:[''],
      selHotel: [{ hotelName: "", roomPrice: "",adress:'' ,contactInfo:""}, [Validators.required]],
      selTrain: [{ trainNumber: 0, destination: "", ticketPrice: "" ,details:"",departureTime:'',arrivalTime:''},[Validators.required] ],
    })

    this.program = {
      // "id": this.PorgramForm.value.id,
      userID: this.CurrentUser.id,
      programName: '',
      fromDate: '',
      toDate: '',
      cityID:0,
      fromCityID:'',
      toCityID:'',
      // img:this.PorgramForm.value.img,
      selHotel: {
        hotelName: '',
        roomPrice: '',
        adress:'' ,
        contactInfo:""
      },
      selTrain: {
        trainNumber:  0,
        destination: '',
        ticketPrice: '',
        details:"",
        departureTime:'',arrivalTime:''
      }

    }
  }
  selectHotel(hotel: any) {
    this.selectedHotel = hotel.target.value
    console.log(hotel.target.value)

  }
  selectTrain(train: any) {
    this.selectedTrain = train.target.value
    console.log(train.target.value)
  }
 

  chooseCity(a: any) {
    console.log('hotel')
    // console.log(a.target.value)
    this.city.getHotelsByCityID(a.target.value).subscribe(
      (response) => {
        // console.log('hotel',this.hotelByCityID)
        this.hotelByCityID = response;
        // console.log(response)

      },
      (err) => { console.log(err) }
    )

  }

  chooseTrain(train: any) {
    //  console.log(train.target.value)
    console.log('Train')
    this.city.getTrainsByCityID(train.target.value).subscribe(
      (response) => {
        this.trainByCityID = response;
      },
      (err) => { console.log(err) }
    )
      
  }
  chooseTrainDes(traincity:any,trainDest:any){
    this.city.getTrainsBydest(traincity.target.value,trainDest.target.value).subscribe(
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
    this.city.saveProgram(this.PorgramForm.value).subscribe(
      (res) => {
         console.log(res);
         alert("saved")
        this.route.navigate(['/account/dashboard']);
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
