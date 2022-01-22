import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId:string = '';
  constructor(private userService:UserService,
    private activeRoute:ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params
    .subscribe( data => {
      this.userId = data['id'];
    })
    if(this.userId) {
      this.userService.deleteUser(this.userId)
      .subscribe({
        next: (v) => {
          this._snackBar.open('User Delete successfully');
          this.router.navigate(['../list']);
        },
        error: (e) => {
          this._snackBar.open('Unable to delete user');
        },
        complete: () => console.info('complete')
      })
      }
    }

}
