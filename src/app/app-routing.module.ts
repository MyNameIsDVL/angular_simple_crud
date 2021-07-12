import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Routing } from './app.enum';
import { HomeControler } from './controler/home.controler/home.controler';
import { PageIdNotExistGuard } from './controler/page-id-not-exist.guard';
import { PageNotFoundControler } from './controler/page-not-found.controler/page-not-found.controler';
import { StudentAddControler } from './controler/student-add.controler/student-add.controler';
import { StudentEditControler } from './controler/student-edit.controler/student-edit.controler';
import { StudentsListItemControler } from './controler/students-list-item.controler/students-list-item.controler';
import { StudentsService } from './store/students.service';

const routes: Routes = [
  { path: Routing.home, component: HomeControler },
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: Routing.students, component: StudentsListItemControler },
  { path: Routing.studentsAddNewStudent, component: StudentAddControler },
  { path: Routing.studentsEditExStudent, component: StudentEditControler, resolve: { student: StudentsService }, canActivate: [PageIdNotExistGuard] },
  { path: Routing.pageNotFound, component: PageNotFoundControler }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
