import { Component, OnInit } from '@angular/core';
import { DataCollectionService} from 'src/app/data-collection.service';

@Component({
  selector: 'app-school-campuses',
  templateUrl: './school-campuses.component.html',
  styleUrls: ['./school-campuses.component.css']
})
export class SchoolCampusesComponent implements OnInit {

  constructor(private serviceWrite: DataCollectionService) { 
    this.serviceWrite.sylvania,
    this.serviceWrite.rockCreek,
    this.serviceWrite.cascade,
    this.serviceWrite.southeast
  }

  ngOnInit() {
  }


}
