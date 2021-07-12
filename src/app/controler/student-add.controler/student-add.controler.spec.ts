import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddControler } from './student-add.controler';

describe('StudentAdd.ControlerComponent', () => {
  let component: StudentAddControler;
  let fixture: ComponentFixture<StudentAddControler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddControler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddControler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
