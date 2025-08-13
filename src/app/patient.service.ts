import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import {  ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PatientService {


  private baseUrl = "http://localhost:8080/api/v1"; // Adjust this to your real endpoint

  constructor(private httpClient: HttpClient,private router:Router,private route:ActivatedRoute) {}


getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`); 
}

  
getPatientById(id:number):Observable<Patient>{

  return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
}


    
delete(id:number):Observable<object>{

  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}



 createPatient(Patient:Patient):Observable<Patient>{

  return this.httpClient.post<Patient>(`${this.baseUrl}`,Patient);
}



updatePatient(id:number,patient:Patient):Observable<Patient>{

  return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`,patient);
}



gotoPatientList(){
  this.router.navigate([`/view-patient`]);
}

  }

