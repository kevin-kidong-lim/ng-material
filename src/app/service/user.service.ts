import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListUsersComponent } from '../users/list-users/list-users.component';
import { IUser } from '../users/list-users/list-users.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.cypress.io/'
  constructor(private http:HttpClient) {

  }
//https://jsonplaceholder.cypress.io/users
  listUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl + 'users');
  }
  viewUser(id: string){
    return this.http.get(this.baseUrl + 'users/'+id);
  }
  updateUser(id: string, userObj: any){
    return this.http.put(this.baseUrl + 'users/'+id, userObj);
  }
  deleteUser(id: string){
    return this.http.delete(this.baseUrl + 'users/'+id);
  }
  addUser(userObj:any){
    return this.http.post(this.baseUrl + 'users', userObj);
  }




}
