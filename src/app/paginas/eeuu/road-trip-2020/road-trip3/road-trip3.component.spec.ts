import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip3Component } from './road-trip3.component';

describe('RoadTrip3Component', () => {
  let component: RoadTrip3Component;
  let fixture: ComponentFixture<RoadTrip3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
