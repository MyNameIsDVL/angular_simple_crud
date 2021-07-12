import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundControler } from './page-not-found.controler';

describe('PageNotFound.ControlerComponent', () => {
  let component: PageNotFoundControler;
  let fixture: ComponentFixture<PageNotFoundControler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundControler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundControler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
