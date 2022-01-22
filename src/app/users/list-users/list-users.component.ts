import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';


export interface IUser {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: IUser[] = [
  // {id: 1, name: 'Hydrogen', username: 'kevin', email: 'kevin@gmail.com'},
];


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  // listUsers!: Observable<Object>;
  listUsers!: IUser[];
  test: string = "";
  students$: string = '';

  displayedColumns: string[] = ['id', 'name', 'username', 'email','actions'];
  dataSource = ELEMENT_DATA;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.userService.listUsers()
    .subscribe( data => {
      this.listUsers = data;
      // this.dataSource = data;
    })
  }

}
