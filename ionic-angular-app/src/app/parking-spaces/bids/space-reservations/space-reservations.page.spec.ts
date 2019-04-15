import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceReservationsPage } from './space-reservations.page';

describe('SpaceReservationsPage', () => {
  let component: SpaceReservationsPage;
  let fixture: ComponentFixture<SpaceReservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceReservationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
