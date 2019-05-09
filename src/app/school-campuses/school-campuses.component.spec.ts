import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCampusesComponent } from './school-campuses.component';

describe('SchoolCampusesComponent', () => {
  let component: SchoolCampusesComponent;
  let fixture: ComponentFixture<SchoolCampusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCampusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCampusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
