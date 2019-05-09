import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDaysComponent } from './class-days.component';

describe('ClassDaysComponent', () => {
  let component: ClassDaysComponent;
  let fixture: ComponentFixture<ClassDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
