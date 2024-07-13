import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
// import { TrainService } from '../train.service';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent implements OnInit {
  id:number;
  bus:Bus;
  errorMessage: string = '';
  constructor(private busService:BusService, private router:Router,private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.bus = new Bus('', '', '', '', '', 0);
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.updateBus();
  }

  updateBus() {
    this.busService.updateBus(this.id, this.bus).subscribe(
      data => {
        if (data) {
          console.log(data);
          this.bus = new Bus('', '', '', '', '', 0);
          this.gotoList();
        } else {
          this.errorMessage = `Bus not found with id: ${this.id}`;
        }
      },
      error => console.log(error)
    );
  }
  gotoList(){
    this.router.navigate(['provider']);
  }
}