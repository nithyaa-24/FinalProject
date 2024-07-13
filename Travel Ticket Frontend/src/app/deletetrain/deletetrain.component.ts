import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../train';
import { TrainService } from '../train.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-deletetrain',
  templateUrl: './deletetrain.component.html',
  styleUrls: ['./deletetrain.component.css']
})
export class DeletetrainComponent implements OnInit {
  trains: Train[];

  constructor(private trainService: TrainService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.trainService.getAllTrains().subscribe(
      data => {
        this.trains = data;
      },
      error => {
        console.error('Error fetching trains', error);
      }
    );
  }

  deleteTrain(id: number): void {
    this.trainService.deleteTrain(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.error(error)
      
    );
  }
  updateTrain(id:number){
    this.router.navigate(['update',id]);
  }
}
