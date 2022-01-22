import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId:string = '';
  userDetail: any;

  constructor(private userServie: UserService,
    private activatRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatRoute.params
    .subscribe(data => {
      this.userId = data['id'];
    })
    this.userServie.viewUser(this.userId)
    .subscribe(data => {
      console.log(data);
      this.userDetail = data;
    })
  }

}
