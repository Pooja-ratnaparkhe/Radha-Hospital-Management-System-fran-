import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdminauthService {

  
  constructor() { }

  authenticate( username2:string,password:string){

    if(username2 =='Pooja'&& password =='Pooja@1234'){

      sessionStorage.setItem('username2',username2);

      return true;
    }

    else
    {
      return false;
    }
  }


isUserLoggedIn(){

  console.log("user login Successful...");

  let user=sessionStorage.getItem('username2');

  return!(user==null)
}



logout(){

  //sessionStorage.removeItem('username2');

  console.log("logoute  user ..!!!")

  sessionStorage.removeItem('username2');


}
}
