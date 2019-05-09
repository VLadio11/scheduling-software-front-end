import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) {}
  private scheduleSubject: Subject<any> =  new Subject();

  public schedule  = this.scheduleSubject.asObservable();

  class = [];
  campus = [];
  days = [];
  receiveParams(classes: Array<string>, campus: Array<boolean>, days: Array<boolean>){
    this.class = classes;
    this.campus = campus;
    this.days = days;
    this.callService(this.class, this.campus, this.days)
  }

  callService(classes, campus, days){
    this.sendClasses(classes, campus, days);
  }
  sendClasses(classes, campus, days){
    this.http.get(`http://localhost:3000/classes?class=${classes}&days=${days}&campuses=${campus}`).subscribe((data=>{
    this.scheduleSubject.next(data);
    }))
  }
  //(`http://localhost:3000/classes?course1=${course1}&course2=${course2}&course3=${course3}&course4=${course4}`)
}
