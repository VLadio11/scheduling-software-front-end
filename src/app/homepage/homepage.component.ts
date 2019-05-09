import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataCollectionService} from 'src/app/data-collection.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor() {
   }

  ngOnInit() {
    this.flag = [true, false, false, false, false];
  }

  flag: boolean[]= new Array();
  alert: boolean = false;

 
  anotherEntry(){
    this.alert = this.alertBox();
    if(this.alert ==  false){}
    else{return}

    for(let index in this.flag){
      if(this.flag[index] == true){continue}
      else{this.flag[index] = true; return}
    }
  }

  alertBox(){
    if(this.flag[3] == true){window.alert("ERROR\nYou can only enter four courses or less");return true}
    else{return false};
  }

  checkForZero(){
    if(this.flag[0] == false){window.alert("ERROR\nYou need to enter at least one course"); this.flag[0] = true}
  }

  removeCourse(){
    for(let i=0; i<=3; i++){
      if(this.flag[i+1] == false){this.flag[i] = false;}
      else{continue}
    }
    this.checkForZero();
  }

}
