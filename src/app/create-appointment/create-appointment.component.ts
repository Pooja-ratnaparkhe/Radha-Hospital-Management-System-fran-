import { Component } from '@angular/core';
// import { AppComponent } from '../app.component';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.component.html',
  // styleUrl: './create-appointment.component.css'
  styleUrls: ['./create-appointment.component.css'] // Note the plural "styleUrls"

})

export class CreateAppointmentComponent {

appointment:Appointment=new Appointment();

constructor(private appointmentService:AppointmentService,private router:Router){}

 saveAppointment() {
  
  this.appointmentService.CreateAppointment(this.appointment).subscribe((data: Appointment) => {
    console.log(data);
    this.goToAppointment();
  });
}



  onSubmit(){
 
    this.saveAppointment();
  }


  goToAppointment(){
    this.router.navigate(['/appointment'])
  }
}
