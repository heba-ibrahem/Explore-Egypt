import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/Services/city.service';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { Icity } from 'src/app/viewmodels/icity';
import { IUsers } from 'src/app/viewmodels/iusers';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, OnChanges {
  profileFrm: FormGroup = new FormGroup({});
  CurrentUser: IUsers = {};
  CityList: Icity[] = [];
  user_id: number = 0;
  currentUserSubscription: Subscription | null = null;
  constructor(private fb: FormBuilder, private userService: UsersServiceService
    , private city: CityService) {
    if (localStorage.getItem('user')) {
      this.user_id = this.userService.getUserID();
      this.loadAccount();
      console.log(this.CurrentUser)
    }
  }
  ngOnChanges() {
    throw new Error('Method not implemented.');
  }
  async loadAccount() {
    this.currentUserSubscription = (await this.userService.getUserById(this.user_id))
      .subscribe(user => {
        this.CurrentUser = user;
        console.log(this.CurrentUser)
      });
  }

  ngOnInit(): void {
    this.profileFrm = this.fb.group({
      firstName: [this.CurrentUser.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.CurrentUser.lastName, [Validators.required, Validators.minLength(3)]],
      password: [this.CurrentUser.password, [Validators.required, Validators.minLength(4)]],
      email: [this.CurrentUser.email, [Validators.required]],
      city: [this.CurrentUser.city, [Validators.required]]
    });

    /// get all city
    this.city.getCity().subscribe(
      (response) => {
        this.CityList = response;

      },
      (err) => { console.log(err) }

    )
  }
  update() {
    this.userService.update(this.CurrentUser.id || 0, this.profileFrm.value)
    console.log("update")
    console.log(this.CurrentUser)
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription?.unsubscribe();
  }

}
