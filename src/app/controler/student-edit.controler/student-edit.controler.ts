import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Routing } from 'src/app/app.enum';
import { buttonLabel, form, FormMetaData } from 'src/app/metaData/formMetaData';
import { Student } from 'src/app/model/student.model';
import { StudentsService } from 'src/app/store/students.service';

@Component({
  selector: 'app-student-edit.controler',
  templateUrl: './student-edit.controler.html',
  styleUrls: ['./student-edit.controler.css']
})
export class StudentEditControler implements OnInit {

  modelForm: FormGroup;

  student: Student = {
    id: null,
    lastName: '',
    firstName: '',
    major: '',
    gradePointAverage: null,
    description: ''
  }

  button: buttonLabel = {label:'Zapisz'}

  formData: form[];

  constructor(private router: Router, private studentsService: StudentsService, private activatedRoute: ActivatedRoute, private formMetaData: FormMetaData) {
    this.formData = this.formMetaData.formData;
  }

  edit(student: Student) {
    this.studentsService.updateExStudent(student, this.student.id);
    this.goToEdit();
  }

  goToEdit() {
    this.router.navigateByUrl(Routing.students);
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.student = data.student;
    });
  }

}
