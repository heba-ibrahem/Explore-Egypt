import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/Services/users-service.service';
import { IUsers } from 'src/app/viewmodels/iusers';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  CurrentUser: IUsers;
  constructor(private userService: UsersServiceService) {
    this.CurrentUser = this.userService.userValue;
    console.log(this.CurrentUser.id)
   }

  ngOnInit(): void {
  }

}
