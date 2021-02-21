import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  CurrentUser: IUsers;
  list: IProgram |null=null;
  constructor(private fb: FormBuilder, private UserSevives: UsersServiceService, private city: CityService) {
    this.PorgramForm = this.fb.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      selHotel: [{ hotelName: "", roomPrice: "" }, [Validators.required]],
      selTrain: [{ trainNumber: 0, destination: "", ticketPrice: "" }, [Validators.required]],

    })
    this.CurrentUser = this.UserSevives.userValue;
    console.log(this.CurrentUser)
  }
  selectHotel(hotel: any) {

    this.selectedHotel = hotel.target.value
  }
  selectTrain(train: any) {
    this.selectedTrain = train.target.value
  }
 

  chooseCity(a: any) {
    // console.log(a.target.value);
    // console.log('hotel')
    this.city.getHotelsByCityID(a.target.value).subscribe(
      (response) => {
        // console.log('hotel')
        // console.log(this.selectedCity)
        // console.log(this.hotelByCityID)
        this.hotelByCityID = response;
      },
      (err) => { console.log(err) }
    )

  }

  chooseTrain(train: any) {
    // console.log(train.target.value);
    // console.log('Train')
    this.city.getTrainsByCityID(train.target.value).subscribe(
      (response) => {
        // console.log('Train')
        // console.log(this.selectedCity)
        // console.log(this.selectedDestenation)
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
    console.log("this.PorgramForm.value")
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
      }

    }
    this.city.saveProgram(this.list).subscribe(
      (res) => {
        // console.log(res);
        alert("saved")

      },
      (err) => { console.log(err) }
    );
  }



}
