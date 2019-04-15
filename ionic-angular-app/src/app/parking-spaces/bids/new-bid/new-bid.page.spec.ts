import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBidPage } from './new-bid.page';

describe('NewBidPage', () => {
  let component: NewBidPage;
  let fixture: ComponentFixture<NewBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
