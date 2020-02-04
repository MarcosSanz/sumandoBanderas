import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip5Component } from './road-trip5.component';

describe('RoadTrip5Component', () => {
  let component: RoadTrip5Component;
  let fixture: ComponentFixture<RoadTrip5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
