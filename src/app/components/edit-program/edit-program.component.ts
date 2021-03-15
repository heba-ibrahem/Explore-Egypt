import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../../Services/city.service';
import { UsersServiceService } from '../../Services/users-service.service';
import { IHotel } from '../../viewmodels/ihotel';
import { IProgram } from '../../viewmodels/iprogram';
import { ITrain } from '../../viewmodels/itrain';
import { IUsers } from '../../viewmodels/iusers';

@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.scss']
})
export class EditProgramComponent implements OnInit {

  
  prog: IProgram| null = null;
  PorgramForm!: FormGroup;
  CityList: any[] = [];
  selectedCity: number = 1;
  //fliter train
  DestenationList: any[]=[];
  selectedDestenation:number=1;
  trainToDest: ITrain[]=[];
  hotelByCityID: IHotel[] = [];
  trainByCityID: ITrain[] = [];
  selectedHotel: any[]=[];
  selectedTrain: any[] = [];
  CurrentUser: IUsers={};
  user_id :number =0;
  program: IProgram ;
  id!: number;
  constructor(private fb: FormBuilder ,private UserSevives: UsersServiceService, private city: CityService, private router: Router,private route: ActivatedRoute,) {
    if(localStorage.getItem('user')){
      this.user_id = this.UserSevives.getUserID();
      this.loadAccount();
    }
    else{
      this.CurrentUser = {};
    }
    this.PorgramForm = this.fb.group({
      programName: ['', [Validators.required]],
      fromDate: ['', [Validators.required ]],
      toDate: ['', [Validators.required]],
      cityID:[0, [Validators.required]],
      fromCityID:['',[Validators.required]],
      toCityID:['',[Validators.required]],
      selHotel: [{ hotelName: "", roomPrice: "",adress:'' ,contactInfo:""}, [Validators.required]],
      selTrain: [{ trainNumber: 0, destination: "", ticketPrice: "" ,details:"",departureTime:'',arrivalTime:''}, [Validators.required]],

    })
    
    // this.CurrentUser = this.UserSevives.userValue;
    // console.log(this.CurrentUser)
    this.program = {
      // "id": this.PorgramForm.value.id,
      userID: this.CurrentUser.id,
      programName: this.PorgramForm.value.programName,
      fromDate: this.PorgramForm.value.from,
      toDate: this.PorgramForm.value.to,
      cityID:this.PorgramForm.value.city,
      fromCityID:this.PorgramForm.value.fromCity,
      toCityID:this.PorgramForm.value.fromCity,
      selHotel: {
        hotelName: this.PorgramForm.value.selHotel.hotelName,
        roomPrice: this.PorgramForm.value.selHotel.roomPrice,
        adress: this.PorgramForm.value.selHotel.adress,
        contactInfo: this.PorgramForm.value.selHotel.contactInfo,
      },
      selTrain: {
        trainNumber: this.PorgramForm.value.selTrain.trainNumber,
        destination: this.PorgramForm.value.selTrain.destination,
        ticketPrice: this.PorgramForm.value.selTrain.ticketPrice,
        details: this.PorgramForm.value.selTrain.details,
        departureTime: this.PorgramForm.value.selTrain.departureTime,
        arrivalTime: this.PorgramForm.value.selTrain.arrivalTime,
      }}
  
  }
  selectHotel(hotel:any){
    this.selectedHotel= hotel.target.value
  }
  selectTrain(train:any){
    this.selectedHotel= train.target.value
  }

  chooseCity(hotel:any) {
    console.log(hotel.target.value);
    // console.log('hotel')
    this.city.getHotelsByCityID(hotel.target.value).subscribe(
      (response) => {
        // console.log('hotel',this.hotelByCityID)
        this.hotelByCityID = response;
      },
      (err) => { console.log(err) }
    )
  }

  chooseTrain(train:any) {
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
        this.trainByCityID = response;
      },
      (err) => { console.log(err) }
    )
  }
 


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.city.getCity().subscribe(
      (response) => {
        this.CityList = response;
        // console.log(this.CityList)
      },
      (err) => { console.log(err) }
    )
    this.city.getProgramByID(this.id).subscribe(
      (response)=>{
        this.PorgramForm.patchValue(response)
        console.log(response)
      }
    )
    
  }

  edit() {
    console.log("update")
    // console.log(this.PorgramForm.value)
    this.city.editProgram(this.id, this.PorgramForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/programDetails',this.id ]);  
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
