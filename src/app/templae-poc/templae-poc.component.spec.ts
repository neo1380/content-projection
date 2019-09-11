import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaePocComponent } from './templae-poc.component';

describe('TemplaePocComponent', () => {
  let component: TemplaePocComponent;
  let fixture: ComponentFixture<TemplaePocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplaePocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
