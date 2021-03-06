import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
// import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    // ReactiveFormsModule
    // MatTableModule
  ],
  exports: [
    ListUsersComponent,
  ]
})
export class UsersModule { }
