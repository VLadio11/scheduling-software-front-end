import { Injectable } from '@angular/core';
import { HttpRequestService} from './http-request.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';
@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {
  
  constructor(private http: HttpRequestService) { }

  class1:string = '';
  class2:string = '';
  class3:string = '';
  class4:string = '';
  sylvania: boolean = false;
  rockCreek: boolean = false;
  cascade: boolean = false;
  southeast: boolean = false;
  web: boolean = false;


  monday_wednesday: boolean = false;
  tuesday_thursday: boolean = false;
  friday: boolean = false;
  saturday: boolean = false;
  validData = [];

  buildSchedule(){
    this.cleanData();
    this.gatherParams();
  }

  gatherParams(){
    let classes = this.validData;
    let campus = [this.sylvania, this.rockCreek, this.cascade, this.southeast];
    let days = [this.monday_wednesday, this.tuesday_thursday, this.friday, this.saturday, this.web];
    this.http.receiveParams(classes, this.cleanCampuses(campus), this.cleanDays(days));
  }

  cleanDays(days){
    let clean_days = [];
    if(days[0] == true){clean_days.push("M/W")};
    if(days[1] ==  true){clean_days.push("T/R")};
    if(days[2] ==  true){clean_days.push("F")};
    if(days[3] == true){clean_days.push("S")};
    if(days[4] == true){clean_days.push("WEB")};
    return clean_days;
  }

  cleanCampuses(campus){
    let campuses = [];
    if(campus[0] == true){campuses.push("Sylvania")};
    if(campus[1] == true){campuses.push("Rock Creek")};
    if(campus[2] == true){campuses.push("Cascade")}
    if(campus[3] == true){campuses.push("Southeast")}
    return campuses;
  }

  cleanData(){
    let classData = [this.class1, this.class2, this.class3, this.class4];
    let campuses = [this.sylvania, this.rockCreek, this.cascade, this.southeast, this.web];
    this.validData = [];
    for(let index in classData){
       if(classData[index] == '' || classData[index] == 'Course name'){
        continue
       }
       else{
        this.validData.push(classData[index]);
       }
     }
     if(campuses[0] == false&&campuses[1] == false &&campuses[2] == false&&campuses[3] == false&&campuses[4] == false){
      this.sylvania = true;
      this.rockCreek = true;
      this.cascade = true;
      this.southeast = true;
      this.web = true;
     }
     if(this.monday_wednesday == false && this.tuesday_thursday == false  && this.friday == false && this.saturday == false){
       this.monday_wednesday = true;
       this.tuesday_thursday = true;
       this.friday = true;
       this.saturday = true;
     }
  }

  
}
