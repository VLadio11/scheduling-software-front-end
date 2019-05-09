import { Component, OnInit, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataCollectionService} from 'src/app/data-collection.service';


@Component({
  selector: 'app-class-a',
  templateUrl: './class-a.component.html',
  styleUrls: ['./class-a.component.css']
})
export class ClassAComponent implements OnInit {
  constructor(private valuesService: DataCollectionService) { this.valuesService.class1 = "";}
  
  

  //bad input verification
  class = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.class.hasError('required') ? 'You must enter a course': 'You must enter a course';
  }
  ngOnInit() {
  }

}
