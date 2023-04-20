import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDateComponent } from './trip-date.component';

describe('TripDateComponent', () => {
  let component: TripDateComponent;
  let fixture: ComponentFixture<TripDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
