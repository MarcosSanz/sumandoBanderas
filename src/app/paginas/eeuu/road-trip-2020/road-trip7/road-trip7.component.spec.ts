import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip7Component } from './road-trip7.component';

describe('RoadTrip7Component', () => {
  let component: RoadTrip7Component;
  let fixture: ComponentFixture<RoadTrip7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
