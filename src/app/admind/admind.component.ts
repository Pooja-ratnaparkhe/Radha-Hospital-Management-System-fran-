import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admind',
  standalone:false,
  templateUrl: './admind.component.html',
  styleUrls: ['./admind.component.css']
})
export class AdmindComponent implements OnInit {

    // <!-- Patient object creation--!>

   patients: Patient[] = [];     
  constructor(private pt: PatientService,private adminauthService:AdminauthService,private route:Router) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.pt.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }

   delete(id: number) {
  this.pt.delete(id).subscribe(data => {
    console.log(data);
    this.getPatients();
  });
}

logout(){
  this.adminauthService.logout();
  this.route.navigate(['home']);


}
}