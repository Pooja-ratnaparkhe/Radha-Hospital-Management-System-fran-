import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DocauthService {

  constructor() { }

  authenticate(username: string, password: string){

    if (username == 'Pooja' && password =='Pooja@1234') {

      sessionStorage.setItem('username',username);

      return true;

    } 

    else 

      {
      return false;
    }
  }

  isUserLoggedIn(){

    console.log("doctor login Successful...");

    let user=sessionStorage.getItem('username');

    return!(user == null);
  }



  logout(){

    console.log("Logout doctor...!!!")

    sessionStorage.removeItem('username');
  }
  
}
