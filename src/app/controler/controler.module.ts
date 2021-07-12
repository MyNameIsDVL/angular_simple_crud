import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListItemControler } from './students-list-item.controler/students-list-item.controler';
import { StudentAddControler } from './student-add.controler/student-add.controler';
import { ButtonModule } from 'primeng/button';
import { DumbComponentsModule } from '../dumbComponents/dumb-components.module';
import { StudentEditControler } from './student-edit.controler/student-edit.controler';
import { PageIdNotExistGuard } from './page-id-not-exist.guard';
import { NavControler } from './nav.controler/nav.controler';
import { HomeControler } from './home.controler/home.controler';
import { PageNotFoundControler } from './page-not-found.controler/page-not-found.controler';
import { DataSourceModule } from '../datasource/data-source.module';
import { StoreModule } from '../store/store.module';

@NgModule({
  declarations: [
    StudentsListItemControler,
    StudentAddControler,
    StudentEditControler,
    NavControler,
    HomeControler,
    PageNotFoundControler
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DumbComponentsModule,
    DataSourceModule,
    StoreModule
  ],
  providers: [PageIdNotExistGuard],
  exports: [
    NavControler
  ]
})
export class ControlerModule { }
