import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip9Component } from './road-trip9.component';

describe('RoadTrip9Component', () => {
  let component: RoadTrip9Component;
  let fixture: ComponentFixture<RoadTrip9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
