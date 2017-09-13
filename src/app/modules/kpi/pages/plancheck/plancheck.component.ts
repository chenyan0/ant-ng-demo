import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { PlanCheckApi } from "../../../../service/api/plancheck.api";
@Component({
  selector: 'plan-check',
  templateUrl: 'plancheck.component.html',
  styleUrls: ['./plancheck.component.less']
})

export class PlanCheckComponent implements OnInit {
  yearForm: FormGroup;
  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  _dataSet = [];
  filterAddressArray = [
    { name: 'London', value: false },
    { name: 'Sidney', value: false }
  ];


  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  };

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  };
 
  constructor(
    private fb: FormBuilder,
    private api:PlanCheckApi
  ) { }
  ngOnInit() {
    this.yearForm = this.fb.group({
      select: ['2017年'],
    })

    this.api.getlist('2017').subscribe((d:any)=>{
      if(d){
        this._dataSet=d.data.data;
        this._displayData = this._dataSet;
      }
    })
  }
}