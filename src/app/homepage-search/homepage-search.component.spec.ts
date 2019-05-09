import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSearchComponent } from './homepage-search.component';

describe('HomepageSearchComponent', () => {
  let component: HomepageSearchComponent;
  let fixture: ComponentFixture<HomepageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
