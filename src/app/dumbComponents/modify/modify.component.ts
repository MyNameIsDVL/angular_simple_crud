import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { buttonLabel, form } from 'src/app/metaData/formMetaData';
import { Base } from 'src/app/model/base.model';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  @Input() data: Base;
  @Input() formData: form[];
  @Input() buttonlabel: buttonLabel;
  @Input() modelForm: FormGroup;
  @Output() event = new EventEmitter<void>();
  @Output() goToStudentsPage = new EventEmitter<void>();

  ok(form): void {
    this.event.emit(form.value);
  }

  goToStudents() {
    this.goToStudentsPage.emit();
  }

  ngOnInit(): void {
      this.modelForm = new FormGroup(this.formData.reduce((acc, obj) => {
        let key = obj.name
        const fc: FormControl = new FormControl(this.data[key]);
        if (obj.required)
          fc.validator = Validators.required;

        acc[key] = fc;
        return acc
      }, {}));
  }

}
