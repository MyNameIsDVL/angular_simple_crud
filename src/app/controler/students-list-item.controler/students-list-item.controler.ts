import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routing } from 'src/app/app.enum';
import { columns } from 'src/app/dumbComponents/list/list.component';
import { StudentsService } from 'src/app/store/students.service';


@Component({
  selector: 'app-students-list-item.controler',
  templateUrl: './students-list-item.controler.html',
  styleUrls: ['./students-list-item.controler.css']
})
export class StudentsListItemControler implements OnInit {

  cols: columns[];

  constructor(private router: Router, private studentsService: StudentsService, private route: ActivatedRoute) { }

  get studentsList() {
    return this.studentsService.getStudents();
  }

  remove(id: number) {
    return this.studentsService.removeStudentsById(id);
  }

  goToAddStudent() {
    this.router.navigateByUrl(Routing.studentsAddNewStudent);
  }

  goToEditStudent(id: number) {
    this.router.navigate([Routing.goToEditStudent, id]);
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'firstName', header: 'Imię' },
      { field: 'lastName', header: 'Nazwisko' },
      { field: 'major', header: 'Kierunek studiów' },
      { field: 'gradePointAverage', header: 'Średnia' },
      { field: 'description', header: 'Opis' }
    ];
  }

}
