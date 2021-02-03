import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profileFrm : FormGroup= new FormGroup({});
  constructor(private fb:FormBuilder,) { }

  ngOnInit(): void {
    this.profileFrm = this.fb.group({
      FName : ['', [Validators.required, Validators.minLength(3)]],
      LName : ['', [Validators.required, Validators.minLength(3)]],
      password : ['', [Validators.required, Validators.minLength(4)]],
      email : ['', [Validators.required]],
      country : ['', [Validators.required]]
    });
  }
  update(){
    console.log("update")
  }

}
