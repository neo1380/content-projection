import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentPocComponent } from './ng-content-poc.component';

describe('NgContentPocComponent', () => {
  let component: NgContentPocComponent;
  let fixture: ComponentFixture<NgContentPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
