import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionPage } from './competition.page';

describe('CompetitionPage', () => {
  let component: CompetitionPage;
  let fixture: ComponentFixture<CompetitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
