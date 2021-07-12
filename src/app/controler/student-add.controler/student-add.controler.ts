import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Routing } from 'src/app/app.enum';
import { buttonLabel, form, FormMetaData } from 'src/app/metaData/formMetaData';
import { Student } from 'src/app/model/student.model';
import { StudentsService } from 'src/app/store/students.service';

@Component({
  selector: 'app-student-add.controler',
  templateUrl: './student-add.controler.html',
  styleUrls: ['./student-add.controler.css']
})
export class StudentAddControler implements OnInit {
  
  modelForm: FormGroup;

  student: Student = {
    id: null,
    lastName: '',
    firstName: '',
    major: '',
    gradePointAverage: null,
    description: ''
  }

  button: buttonLabel = {label:'Dodaj'}

  formData: form[];

  constructor(private router: Router, private studentsService: StudentsService, private formMetaData: FormMetaData) {
    this.formData = this.formMetaData.formData;
  }

  add(student: Student) {
    this.studentsService.addNewStudent(student);
    this.goToStudent();
  }

  goToStudent() {
    this.router.navigateByUrl(Routing.students);
  }

  ngOnInit(): void {
   
  }

}
