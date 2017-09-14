import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

import { PlanCheckApi } from "../../../../service/api/plancheck.api";
@Component({
  selector: 'plan-check',
  templateUrl: 'plancheck.component.html',
  styleUrls: ['./plancheck.component.less']
})

export class PlanCheckComponent implements OnInit {
  yearForm: FormGroup;
  _allChecked = false;
  _loading = true;
  _total = 30;
  _indeterminate = false;
  _displayData = [];
  _dataSet = [];
  filterAddressArray = [
    { name: '已审核', value: false },
    { name: '未审核', value: false }
  ];
  constructor(
    private fb: FormBuilder,
    private nms: NzMessageService,
    private api: PlanCheckApi
  ) { }
  ngOnInit() {
    this.yearForm = this.fb.group({
      selectYear: '2017',
    })
    this.getList();
  }
  getList() {
    this._loading = true;
    this.api.getlist(this.getFormControl('selectYear').value).subscribe((d: any) => {
      if (d) {
        this._loading = false;
        this._dataSet = d.data.data;
        this._displayData = this._dataSet;
      }
    });
  }
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
  dataChange(eve) {
    if (!eve) {
      console.log(this.getFormControl('selectYear'));
      this.getList();
    }
  }

  /**
  * 获取表单值
  * @param name 
  */
  getFormControl(name) {
    return this.yearForm.controls[name];
  }

/**
 * 退回confirm 确定回调
 */
  confirm = () => {
    this.nms.info('退回成功');
  }
/**
 * 退回confirm 取消回调
 */
  cancel = function () {
    this.nms.info('click cancel');
  }



}