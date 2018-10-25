import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColloquiumPage } from './colloquium.page';

describe('ColloquiumPage', () => {
  let component: ColloquiumPage;
  let fixture: ComponentFixture<ColloquiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColloquiumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColloquiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
