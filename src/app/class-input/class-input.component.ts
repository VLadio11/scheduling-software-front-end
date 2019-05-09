import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-class-input',
  templateUrl: './class-input.component.html',
  styleUrls: ['./class-input.component.css']
})
export class ClassInputComponent implements OnInit {
  value = 'Enter course name';
  constructor() { }

  ngOnInit() {
  }

  sendData(){
    
  }

}
