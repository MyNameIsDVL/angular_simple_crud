import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavControler } from './nav.controler';

describe('Nav.ControlerComponent', () => {
  let component: NavControler;
  let fixture: ComponentFixture<NavControler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavControler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavControler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
