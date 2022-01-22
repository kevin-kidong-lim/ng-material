import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { UsersModule } from '../users.module';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId:any;
  userDetail!:any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded:boolean = false;
  username:string = '';

  constructor(private userService:UserService,
    private activeRoute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) {

     }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activeRoute.params
    .subscribe( data=>{
      this.userId = data['id'];
    } )
    if(this.userId != ''){
     this.userService.viewUser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetail = data;
        Object.assign(this.userDetail, data);
        console.log(this.userDetail);
        //Build the edit Form
        this.editUserForm = this.formBuilder.group({
          'name': new FormControl(this.userDetail.name),
          'email': new FormControl(this.userDetail.email),
          'phone': new FormControl(this.userDetail.phone),
        })
        this.username = this.userDetail.username;
        this.dataLoaded = true;
      })
      .catch(err => {
        console.log(err);

      })
    }
  }

  updateUser(){
    console.log(this.userId);
    console.log(this.editUserForm);
    this.userService.updateUser(this.userId, this.editUserForm.value)
    .subscribe({
      next: (v) => {
        this._snackBar.open('User update successfully');
      },
      error: (e) => {
        this._snackBar.open('Unable to update user');
      },
      complete: () => console.info('complete')
    })
  }
}
