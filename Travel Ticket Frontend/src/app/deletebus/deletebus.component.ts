import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deletebus',
  templateUrl: './deletebus.component.html',
  styleUrls: ['./deletebus.component.css']
})
export class DeletebusComponent implements OnInit {
  buses:Bus[];
  constructor(private router:Router, private busService:BusService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData():void {
    this.busService.getAllBuses().subscribe(
      data => {
        this.buses = data;
      },
      error => {
        console.error('Error fetching trains', error);
      }
    );
  }

  deleteBus(id: number): void {
    this.busService.deleteBus(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.error(error)
      
    );
  }
  updateBus(id:number){
    this.router.navigate(['update1',id]);
  }
}

