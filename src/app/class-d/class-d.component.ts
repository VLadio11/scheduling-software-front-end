import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataCollectionService} from 'src/app/data-collection.service';

@Component({
  selector: 'app-class-d',
  templateUrl: './class-d.component.html',
  styleUrls: ['./class-d.component.css']
})
export class ClassDComponent implements OnInit {
  constructor(private valuesService: DataCollectionService) {this.valuesService.class4 = "" }
  

  ngOnInit() {
  }
  class = new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    return this.class.hasError('required') ? 'You must enter a course': 'You must enter a course';
  }
}
