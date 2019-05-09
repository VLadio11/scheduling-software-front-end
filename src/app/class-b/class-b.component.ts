import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataCollectionService} from 'src/app/data-collection.service';
@Component({
  selector: 'app-class-b',
  templateUrl: './class-b.component.html',
  styleUrls: ['./class-b.component.css']
})
export class ClassBComponent implements OnInit {

  constructor(private valuesService: DataCollectionService) { this.valuesService.class2 = "" }
  
  ngOnInit() {
  }

  class = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.class.hasError('required') ? 'You must enter a course': 'You must enter a course';
  }

}
