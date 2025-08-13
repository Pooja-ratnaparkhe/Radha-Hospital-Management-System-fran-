import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  standalone: false,
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {

  username :string='';
  password :string='';
  invalidlogin :boolean=false;

  constructor(private adminauthService:AdminauthService,private router:Router){}

    checkLogin(){

      if(this.adminauthService.authenticate(this.username,this.password)){

         this.invalidlogin = false;

        this.router.navigate(['admin']);

        this.invalidlogin=false;
      }

        else
          {

          this.invalidlogin=true

          alert("Wrong Credentials");

          this.router.navigate(['home'])
        }


      }
    }
  


