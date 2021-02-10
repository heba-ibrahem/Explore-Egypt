import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../Services/city.service';
import { IHotel } from '../viewmodels/ihotel';
import { IProgram } from '../viewmodels/iprogram';
import { ITrain } from '../viewmodels/itrain';

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
  constructor(private fb: FormBuilder,private activatedRout: ActivatedRoute, private city: CityService, private route: Router) {
    this.PorgramForm = this.fb.group({
      from: [this.prog?.from, [Validators.required ]],
      to: [this.prog?.to, [Validators.required]],
      selHotel:[{hotelName:this.prog?.selHotel.hotelName, roomPrice:this.prog?.selHotel.roomPrice}, [Validators.required]],
      selTrain:[{trainNumber:this.prog?.selTrain.trainNumber, destination:this.prog?.selTrain.destination, ticketPrice:this.prog?.selTrain.ticketPrice}, [Validators.required]],

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
    this.activatedRout.params.subscribe(data =>{
      this.programID = data.id;
      console.log(this.programID)
      this.city.viewProgram(this.programID).subscribe(programData =>{
        this.prog = programData
      })
      console.log(this.prog)
    })
  }

  edit() {
    console.log("update")
    console.log(this.PorgramForm.value)
    this.city.editProgram(this.programID, this.PorgramForm.value).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/editProgram',this.programID ]);
        
      },
      (err) => { console.log(err) }
    );
  }

}
