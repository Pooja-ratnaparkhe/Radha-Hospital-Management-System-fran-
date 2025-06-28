import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

   private baseUrl = "http://localhost:8080/api/v2";   //observabal = returntype


   
   getAllappointments():Observable<Appointment[]>{       //get All Appointment

    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
   }



   CreateAppointment(appointment:Appointment):Observable<Appointment>{       //create appointment
    return this.httpClient.post<Appointment>(`${this.baseUrl}`,appointment)
   }



   deleteAppointment(id:number):Observable<object>{          //delete Appointment

    return this.httpClient.delete(`${this.baseUrl}/${id}`)
   }
}
