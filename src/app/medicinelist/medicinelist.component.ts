import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  standalone: false,
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})

export class MedicinelistComponent {

  //id:number=0;

  medicines:Medicine[]=[];
 
  constructor(private medicineService:MedicineService, private router:Router,private Router:ActivatedRoute){}

  ngOnInit():void{
    this.getMedicine();
  }

  getMedicine(){

    this.medicineService.getMedicine().subscribe((data: Medicine[])=>{
      this.medicines= data;

    })
   
  }

  update(id:Number){

   this.router.navigate(['/update-medicine', id]);
      
    }

    delete(id:number){
      this.medicineService.delete(id).subscribe(data=>{
        console.log(data);
        this.getMedicine();

      })
    }


}
