import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersPage } from './papers.page';

describe('PapersPage', () => {
  let component: PapersPage;
  let fixture: ComponentFixture<PapersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
