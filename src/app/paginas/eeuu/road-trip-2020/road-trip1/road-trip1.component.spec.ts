import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip1Component } from './road-trip1.component';

describe('RoadTrip1Component', () => {
  let component: RoadTrip1Component;
  let fixture: ComponentFixture<RoadTrip1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
