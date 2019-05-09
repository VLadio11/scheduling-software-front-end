import { Component, OnInit } from '@angular/core';
import { DataCollectionService} from 'src/app/data-collection.service';

@Component({
  selector: 'app-homepage-search',
  templateUrl: './homepage-search.component.html',
  styleUrls: ['./homepage-search.component.css']
})
export class HomepageSearchComponent implements OnInit {

  constructor(private http: DataCollectionService) { }

  ngOnInit() {
  }

  sendRequest(){
    this.http.buildSchedule()
  }
}
