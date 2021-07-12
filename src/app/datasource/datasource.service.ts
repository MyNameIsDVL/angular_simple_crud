import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  public students: Student[] = [
    new Student(1, "Robert", "Saleta", "Informatyka", 5.0, "Brak"),
    new Student(2, "Sabrina", "Okowa", "Fizyka", 4.5, "Brak"),
    new Student(3, "Tomasz", "Kostur", "Informatyka", 3.0, "Brak"),
    new Student(4, "Filip", "Tarczyński", "Fizyka", 4.0, "Brak"),
    new Student(5, "Karolina", "Sroka", "Geografia", 3.5, "Brak"),
    new Student(6, "Wiktor", "Bałecki", "Informatyka", 4.0, "Brak")
  ];

  add(student: Student) {
    const stId: number = this.students.length;
    if (stId <= 0) {
      student.id = 1;
    } else {
      let ID: Student = this.students[this.students.length - 1];
      const id: number = ID.id + 1;
      student.id = id;
    }
    this.students = [...this.students, student];
  }

  edit(student: Student, id: number) {
    this.remove(id);
    const stId: number = this.students.length;
    if (stId <= 0) {
      student.id = 1;
    } else {
      student.id = id;
    }
    this.students = [...this.students, student];
  }

  remove(id: number) {
    const index = this.students.findIndex(i => i.id === id);
    this.students.splice(index, 1);
  }
  
}
