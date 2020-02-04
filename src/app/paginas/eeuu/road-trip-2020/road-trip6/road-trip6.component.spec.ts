import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip6Component } from './road-trip6.component';

describe('RoadTrip6Component', () => {
  let component: RoadTrip6Component;
  let fixture: ComponentFixture<RoadTrip6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
