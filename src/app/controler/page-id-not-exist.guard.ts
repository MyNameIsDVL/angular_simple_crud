import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Routing } from '../app.enum';
import { StudentsService } from '../store/students.service';

@Injectable({
  providedIn: 'root'
})
export class PageIdNotExistGuard implements CanActivate {

  constructor(private router: Router, private studentsService: StudentsService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const routeId: number = +route.params['id'];
      const exId = this.studentsService.getStudents().find(i => i.id === routeId);
      if (exId) {  
        return true;
      } else {
        window.alert(`Student o id: ${routeId} nie istnieje!`);
        this.router.navigateByUrl(Routing.students);
      }
  }
  
}
