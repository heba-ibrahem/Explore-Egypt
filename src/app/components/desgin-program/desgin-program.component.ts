import { Component,  OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { Icity } from 'src/app/viewmodels/icity';
import { IHotel } from 'src/app/viewmodels/ihotel';
import { ITrain } from 'src/app/viewmodels/itrain';

@Component({
  selector: 'app-desgin-program',
  templateUrl: './desgin-program.component.html',
  styleUrls: ['./desgin-program.component.scss']
})
export class DesginProgramComponent implements OnInit{

  PorgramForm: FormGroup;
  CityList: any[] = [];
  selectedCity: number = 1;
  hotelByCityID: IHotel[] = [];
  trainByCityID: ITrain[] = [];
  selectedHotel: any[]=[];
  constructor(private fb: FormBuilder, private UserSevives: UsersServiceService, private city: CityService) {
    this.PorgramForm = this.fb.group({
      from: ['', [Validators.required ]],
      to: ['', [Validators.required]],
      selHotel:['', [Validators.required]],
      selTrain:[{trainNumber:0, destination:"value"}, [Validators.required]],

    })
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
  }
  save() {
    console.log("this.PorgramForm.value")
    console.log(this.PorgramForm.value)
    this.city.saveProgram(this.PorgramForm.value).subscribe(
      (res) => {
        console.log(res);
        
      },
      (err) => { console.log(err) }
    );
  }



}
