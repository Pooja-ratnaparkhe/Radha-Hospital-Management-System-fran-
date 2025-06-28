import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})

export class DocdashComponent {

  constructor(private patientService:PatientService,private router:Router){}
  patients:Patient[]=[];
//ng Oninit

ngOnInit():void{
  this.getpatients();
}

  getpatients(){

    this.patientService.getPatientList().subscribe(data =>{

      this.patients = data;
    })
  }

  update(id:number){

    this.router.navigate(['update-patient',id])

  }

  //this is ts file

  delete(){
    
  }

}
