import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  newUser ={username: '', password:'', firstname:'', lastname:''};
  errMess: string;

  constructor(public dialogRef: MatDialogRef<SignupComponent>,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('User: ', this.newUser);
    this.authService.signUp(this.newUser)
      .subscribe(res => {
        if (res.success) {
          this.dialogRef.close(res.success);
        } else {
          console.log(res);
        }
      },
      error => {
        console.log(error);
        this.errMess = error;
      });
  }

}
