import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListItemControler } from './students-list-item.controler';

describe('StudentsListItem.ControlerComponent', () => {
  let component: StudentsListItemControler;
  let fixture: ComponentFixture<StudentsListItemControler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListItemControler ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListItemControler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
