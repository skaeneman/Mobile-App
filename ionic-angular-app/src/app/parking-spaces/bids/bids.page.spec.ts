import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsPage } from './bids.page';

describe('BidsPage', () => {
  let component: BidsPage;
  let fixture: ComponentFixture<BidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
