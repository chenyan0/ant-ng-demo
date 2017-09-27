import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
    selector: 'report-fill',
    templateUrl: 'fill.component.html',
    styleUrls:['fill.component.less']
})

export class FillComponent implements OnInit {
    fillReportForm:FormGroup;
     _date = null;

     selectedOption;
  searchOptions;
    submitForm() {
    for (const i in this.fillReportForm.controls) {
      this.fillReportForm.controls[ i ].markAsDirty();
    }
  }
    constructor(private fb: FormBuilder) { }

    ngOnInit() { 
         setTimeout(_ => {
      this.searchOptions = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'tom', label: 'Tom' }
      ];
    }, 100);
          this.fillReportForm = this.fb.group({
      formLayout: [ 'horizontal' ],
      userName  : [ null, [ Validators.required ] ],
      department: [ null, [ Validators.required ] ],
      post: [ null, [ Validators.required ] ],
      filltime  : [ null, [ Validators.required ] ]
    });
    }
}