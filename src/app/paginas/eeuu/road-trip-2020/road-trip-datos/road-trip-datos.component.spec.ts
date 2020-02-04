import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTripDatosComponent } from './road-trip-datos.component';

describe('RoadTripDatosComponent', () => {
  let component: RoadTripDatosComponent;
  let fixture: ComponentFixture<RoadTripDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTripDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTripDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
