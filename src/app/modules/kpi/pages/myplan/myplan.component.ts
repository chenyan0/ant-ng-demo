import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { Norm, norms } from './data-model';
import { NormApi } from "../../../../service/api/norm.api";
import { ModalOperateNormComponent } from '../../modals/modal-operate-norm/modal-operate-norm.component';
@Component({
  selector: 'my-plan',
  templateUrl: 'myplan.component.html'
})

export class MyPlanComponent implements OnInit {
  norm: Norm;
  _allChecked = false;
  _indeterminate = false;
  _disabledButton = true;
  _operating = false;
  _current = 1;
  _pageSize =10;
  _total = 1;
  _dataSet = [];
  _displayData=[];
  _loading = true;
  operateName: string;
  _selectData = {};
  normForm: FormGroup;
  updateItem: any;

  _refreshData() {
    this._loading = true;
    console.log(this._current);
    this.NormApi.getNorms(this._current, this._pageSize).subscribe((res: any) => {
      this._loading = false;
      this._total=200;
      this._dataSet = res.data.data;
      this._displayData = this._dataSet;
    })
  }
  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._displayData.some(value => value.checked);
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
      this._displayData.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  };
  _addData() {
    this.operateName = 'add';
    this.showOperateModal('');
  }

  /**
   * 修改指标
   */
  _modifyData() {
    this.operateName = 'md';
    let arr = this._dataSet;
    arr.map((data, index) => {
      if (data.checked) {
        this.updateItem = data;
      }
    })
    this._selectData = this.updateItem;
    this.showOperateModal(this._selectData);
  }

  /**
   * 删除指标
   */
  _deleteData() {
    this._dataSet.forEach(value => {
      if (value.checked) {
        this.NormApi.deleteNorm(value.id).subscribe(d => {
          if (d) {
            this._refreshData();
          }
        });
      }
    })
  }

  /**
   * 获取表单值
   * @param name 
   */
  getFormControl(name) {
    return this.normForm.controls[name];
  }

  /**
   * 显示模态窗
   * @param data 
   */
  showOperateModal(data) {
    const tit = (data == '') ? '新增指标' : '修改指标';
    const type = (data == '') ? 'add' : 'modify';
    const subscription = this.modalService.open({
      title: tit,
      content: ModalOperateNormComponent,
      footer: false,
      componentParams: {
        type: type,
        updateItem: data,
      }
    });
    subscription.subscribe(result => {
      if (result === true) { this._refreshData(); }
    });

  }


  constructor(
    private fb: FormBuilder,
    private subject: NzModalSubject,
    private NormApi: NormApi,
    private modalService: NzModalService
  ) {
  }

  ngOnInit() {
    this._refreshData();
  }
}     