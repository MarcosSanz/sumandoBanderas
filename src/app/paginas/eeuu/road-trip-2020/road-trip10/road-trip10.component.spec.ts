import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip10Component } from './road-trip10.component';

describe('RoadTrip10Component', () => {
  let component: RoadTrip10Component;
  let fixture: ComponentFixture<RoadTrip10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
