import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent  implements OnInit{

  id:number=0;
  medicine:Medicine=new Medicine();

  constructor(private medicineService:MedicineService,private route:ActivatedRoute,private router : Router){}

  ngOnInit(){
    this.id=this.route.snapshot.params[`id`];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    });

  }



  onSubmit(){
    this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.gotoMedicineList();
    });
    
    
  }

  gotoMedicineList(){
    this.router.navigate([`/view-medicine`]);
  }

}
