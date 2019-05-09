import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInputComponent } from './class-input.component';

describe('ClassInputComponent', () => {
  let component: ClassInputComponent;
  let fixture: ComponentFixture<ClassInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
