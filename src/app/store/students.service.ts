import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DatasourceService } from '../datasource/datasource.service';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService implements Resolve<Student> {

  private students: Student[] = [];

  constructor(private datasourceService: DatasourceService) {
    this.students = this.getStudents();
  }

  getStudents(): Student[] {
    return this.datasourceService.students;
  }

  getStudent(id: number): Student {
    return this.getStudents().find(p => p.id === id);
  }

  resolve(route: ActivatedRouteSnapshot): Student {
    return this.getStudent(+route.params['id']);
  }

  addNewStudent(student: Student) {
    this.datasourceService.add(student);
  }

  updateExStudent(student: Student, id: number) {
    this.datasourceService.edit(student, id);
  }

  removeStudentsById(id: number) {
    this.datasourceService.remove(id);
  }

}
