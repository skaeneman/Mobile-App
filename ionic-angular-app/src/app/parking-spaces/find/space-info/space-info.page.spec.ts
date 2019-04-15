import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceInfoPage } from './space-info.page';

describe('SpaceInfoPage', () => {
  let component: SpaceInfoPage;
  let fixture: ComponentFixture<SpaceInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
