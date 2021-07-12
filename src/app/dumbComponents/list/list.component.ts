import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Base } from 'src/app/model/base.model';
import { Student } from 'src/app/model/student.model';

export interface columns {
  field: string;
  header: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: Base[] = [];
  @Input() cols: columns[] = [];
  @Output() removeEvent = new EventEmitter<number>();
  @Output() goToEditPage = new EventEmitter<number>();

  removeButton(id: number) {
    this.removeEvent.emit(id);
  }

  goToEdit(id: number) {
    this.goToEditPage.emit(id);
  }

  ngOnInit(): void {
  }

}
