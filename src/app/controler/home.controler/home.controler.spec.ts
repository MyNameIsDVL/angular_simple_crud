import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeControler } from './home.controler';

describe('Home.ControlerComponent', () => {
  let component: HomeControler;
  let fixture: ComponentFixture<HomeControler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeControler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeControler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
