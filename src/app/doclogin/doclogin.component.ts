
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
import { from } from 'rxjs';


@Component({
  standalone: false,
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
 
})

export class DocloginComponent {

  username: string = '';
  password: string = '';
  inValidLogin: boolean = false;

  constructor(private router: Router, private docauth: DocauthService) {}

  checkLogin() {

    if (this.docauth.authenticate(this.username, this.password)) {

      this.inValidLogin = false;

      this.router.navigate(['docdash']);
    } 

    else
       {
      this.inValidLogin = true;

      alert("Wrong Credentials");

      this.router.navigate(['home']);
    }

  }
}



