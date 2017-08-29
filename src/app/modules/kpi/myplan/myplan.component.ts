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
  operateName:string;
  _selectData = {};
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
    this.operateName='add';
    this.isVisible = true;

  }
  _modifyData() {
    this.operateName='md';
    let arr = this._dataSet;
    let item;
    arr.map(function (data, index) {
      if (data.checked) {
        item = data;
      }
    })
    this._selectData = item;
    this.isVisible = true;

    this.validateForm.setValue({
        name: item.name,
        standard:  item.standard,
        weight: item.weight,
        goal: item.goal,
        Jan:  item.Jan,
        Feb: item.Feb
    });
  }
  _deleteData() {
    let arr = this._dataSet;
    arr.map(function (data, index) {
      if (data.checked) {
        arr.splice(index, 1);
      }
    })
    this._dataSet = [].concat(arr);
    this._refreshStatus();
  }


  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }

  }

  constructor(private fb: FormBuilder) {
  }
  handleOk = (e) => {
    this.isConfirmLoading = true;
    let formModel = this.validateForm.value;
    if(this.operateName=='add'){
      this._dataSet.push(formModel);
      this._dataSet = [].concat(this._dataSet)  //改变数据引用地址
    }else if(this.operateName=='md'){
          console.log(formModel);

    }
    setTimeout(() => {
      this._dataSet.forEach(value => value.checked = false);
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.validateForm.reset();
        this._refreshStatus();
    },1000)
  
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsPristine();
    }
  }
  handleCancel = (e) => {
    this.isVisible = false;

     this.validateForm.reset();
        for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsPristine();
    }
  }
  _createForm(){
      this.validateForm = this.fb.group({
          name: [''],
          standard: [''],
          weight: [''],
          goal: [''],
          Jan: [''],
          Feb: ['']
        });
    }
  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this._dataSet.push({
        key: i,
        name: `Edward King ${i}`,
        weight: 32,
        standard: `London, Park Lane no. ${i}`,
        goal: `London, Park Lane no. ${i}`,
        Jan: `London, Park Lane no. ${i}`,
        Feb: `London, Park Lane no. ${i}`,


      });
    }
    this._createForm();
  }
}