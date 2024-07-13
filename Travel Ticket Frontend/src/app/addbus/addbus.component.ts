import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
import { Bus } from '../bus';
@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})

export class AddbusComponent  {
bus: Bus = new Bus('', '', '', '', '', 0);
  constructor(private busService:BusService) { }


  onSubmit(): void {
    this.busService.addBus(this.bus).subscribe(
      (data: Bus) => {
        alert('Bus added successfully');
        this.resetForm();
        // this.trainForm.reset(); // Reset the form
        // Reset form or navigate to another page
      },
      (error) => {
        console.error('Error adding bus', error);
      }
    );
  }
  resetForm(): void {
    this.bus = new Bus('', '', '', '', '', 0);
  }
}
