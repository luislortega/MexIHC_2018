import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersPage } from './posters.page';

describe('PostersPage', () => {
  let component: PostersPage;
  let fixture: ComponentFixture<PostersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
