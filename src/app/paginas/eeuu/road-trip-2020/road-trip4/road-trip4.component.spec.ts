import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTrip4Component } from './road-trip4.component';

describe('RoadTrip4Component', () => {
  let component: RoadTrip4Component;
  let fixture: ComponentFixture<RoadTrip4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTrip4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTrip4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
