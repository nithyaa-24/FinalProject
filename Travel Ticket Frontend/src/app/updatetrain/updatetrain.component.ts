import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainService } from '../train.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updatetrain',
  templateUrl: './updatetrain.component.html',
  styleUrls: ['./updatetrain.component.css']
})
export class UpdatetrainComponent implements OnInit {
  id:number;
  train:Train;
  errorMessage: string = '';
  constructor(private trainService:TrainService, private router:Router,private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.train = new Train('', '', '', '', '', 0);
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.updateTrain();
  }

  updateTrain() {
    this.trainService.updateTrain(this.id, this.train).subscribe(
      data => {
        if (data) {
          console.log(data);
          this.train = new Train('', '', '', '', '', 0);
          this.gotoList();
        } else {
          this.errorMessage = `Train not found with id: ${this.id}`;
        }
      },
      error => console.log(error)
    );
  }
  gotoList(){
    this.router.navigate(['provider']);
  }
}