import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})

export class MedicineService {

  constructor(private httpClient: HttpClient) {}

  private baseUrl = "http://localhost:8080/api/v3";


createMedicine(medicine:Medicine):Observable<Medicine>{

  return this.httpClient.post<Medicine>(`${this.baseUrl}`,medicine);

  
}


  getMedicine():Observable<Medicine[]>{

    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  
}
