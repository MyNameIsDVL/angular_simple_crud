import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListComponent } from './list/list.component';
import { InputTextModule } from 'primeng/inputtext';
import { ModifyComponent } from './modify/modify.component';

@NgModule({
  declarations: [
    ModifyComponent,
    ListComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [
    ListComponent,
    ModifyComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent
  ]
})
export class DumbComponentsModule { }
