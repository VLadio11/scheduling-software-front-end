import { Component, OnInit } from '@angular/core';
import { DataCollectionService} from 'src/app/data-collection.service';

@Component({
  selector: 'app-class-days',
  templateUrl: './class-days.component.html',
  styleUrls: ['./class-days.component.css']
})
export class ClassDaysComponent implements OnInit {

  constructor(private http: DataCollectionService) { 
    this.http.monday_wednesday,
    this.http.tuesday_thursday,
    this.http.friday,
    this.http.saturday,
    this.http.web
  }

  ngOnInit() {
  }

}
