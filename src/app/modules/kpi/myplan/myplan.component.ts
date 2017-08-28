import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
    selector: 'my-plan',
    templateUrl: 'myplan.component.html'
})

export class MyPlanComponent implements OnInit {
   _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _dataSet = [];
  _indeterminate = false;
  isVisible = false;
  isConfirmLoading = false;

  validateForm: FormGroup;
  _displayDataChange($event) {
    this._displayData = $event;
  };

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  };

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  };

  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  };
  _addData() {
    this.isVisible = true;
  }
  


  _submitForm() {
      for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    console.log(this.validateForm.value);
  }
  get isHorizontal() {
    return this.validateForm.controls[ 'formLayout' ] && this.validateForm.controls[ 'formLayout' ].value === 'horizontal';
  }
      constructor(private fb: FormBuilder) {
  }
   handleOk = (e) => {
    this.isConfirmLoading = true;

       this._dataSet.push( {  
            'name': 'ABC123'  
        });
       console.log(this._dataSet);
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this._dataSet.push({
        key    : i,
        name   : `Edward King ${i}`,
        weight    : 32,
        standard: `London, Park Lane no. ${i}`,
        goal: `London, Park Lane no. ${i}`,
        Jan: `London, Park Lane no. ${i}`,
        Feb: `London, Park Lane no. ${i}`,
    
        
      });
    }
     this.validateForm = this.fb.group({
        formLayout: [ 'horizontal' ],
        name  : [ null, [ Validators.required ] ],
        standard  : [ null, [ Validators.required ] ],
        Jan  : [ null, [ Validators.required ] ],
        Feb  : [ null, [ Validators.required ] ],
        weight  : [ null, [ Validators.required ] ],
        goal  : [ null, [ Validators.required ] ]
      });
     
  }
}