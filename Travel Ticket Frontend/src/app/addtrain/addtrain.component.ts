import { Component } from '@angular/core';
import { TrainService } from '../train.service';
import { Train } from '../train';
// import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent {
  train: Train = new Train('', '', '', '', '', 0);
  // trainForm: FormGroup;
  constructor(private trainService: TrainService) { }

  onSubmit(): void {
    this.trainService.addTrain(this.train).subscribe(
      (data: Train) => {
        alert('Train added successfully');
        this.resetForm(); // Reset the form
        // Reset form or navigate to another page
      },
      (error) => {
        console.error('Error adding train', error);
      }
    );
  }
  resetForm(): void {
    this.train = new Train('', '', '', '', '', 0);
  }
}
