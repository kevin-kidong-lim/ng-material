import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required,Validators.email]),
      'phone': new FormControl('', [Validators.required,Validators.maxLength(10)])
    })
  }
  createUser(){
    this.userService.addUser(this.addUserForm.value)
    .subscribe({
      next: (v) => {
        this._snackBar.open('User Create successfully');
      },
      error: (e) => {
        this._snackBar.open('Unable to create user');
      },
      complete: () => console.info('complete')
  })
  }

}
