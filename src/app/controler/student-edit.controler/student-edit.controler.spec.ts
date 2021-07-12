import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditControler } from './student-edit.controler';

describe('StudentEdit.ControlerComponent', () => {
  let component: StudentEditControler;
  let fixture: ComponentFixture<StudentEditControler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditControler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditControler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
