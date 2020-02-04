import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip2Component } from './road-trip2.component';

describe('RoadTrip2Component', () => {
  let component: RoadTrip2Component;
  let fixture: ComponentFixture<RoadTrip2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
