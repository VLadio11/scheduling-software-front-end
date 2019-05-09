import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageSearchComponent } from './homepage-search/homepage-search.component';
import { ClassInputComponent } from './class-input/class-input.component';
import { AddClassComponent } from './add-class/add-class.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClassAComponent } from './class-a/class-a.component';
import { ClassBComponent } from './class-b/class-b.component';
import { ClassCComponent } from './class-c/class-c.component';
import { ClassDComponent } from './class-d/class-d.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RemoveCourseComponent } from './remove-course/remove-course.component';
import { SchoolCampusesComponent } from './school-campuses/school-campuses.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { ClassDaysComponent } from './class-days/class-days.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RouterModule, Routes } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';


const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  {path: '', component: HomepageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageSearchComponent,
    ClassInputComponent,
    AddClassComponent,
    ClassAComponent,
    ClassBComponent,
    ClassCComponent,
    ClassDComponent,
    HomepageComponent,
    RemoveCourseComponent,
    SchoolCampusesComponent,
    ClassDaysComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    NgbModalModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    ClickOutsideModule,
    FlatpickrModule.forRoot(),
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddClassComponent
  ]
})
export class AppModule { }
