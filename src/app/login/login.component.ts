import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  })
export class LoginComponent implements OnInit {

  public submitted: boolean;
  public user: {
      email: string;
      password: string;
  };

  constructor(private toastrService: ToastrService) {
    this.toastrService = toastrService;
  }

  ngOnInit() {
      this.user = {
        email : '',
        password : ''
      }
      this.submitted = false;
  }

  userLogin(model,isValid){
     this.submitted = true;
     if(isValid){
         this.user = {
           email : '',
           password : ''
         }
         this.submitted = false;
         this.toastrService.success('Success!', 'Login Successful!');
     }
  }

}
