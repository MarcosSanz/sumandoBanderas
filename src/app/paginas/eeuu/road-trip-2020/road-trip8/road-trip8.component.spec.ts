import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip8Component } from './road-trip8.component';

describe('RoadTrip8Component', () => {
  let component: RoadTrip8Component;
  let fixture: ComponentFixture<RoadTrip8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
