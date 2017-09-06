import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NzModalService, NzModalSubject } from 'ng-zorro-antd';
import { Norm, norms } from './data-model';
import { NormService } from "../../../../service/norm.service";
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
  _displayData = [];
  _operating = false;
  _current = 1;
  _pageSize =10;
  _total = 100;
  _dataSet = [];
  _loading = true;

  isConfirmLoading = false;
  operateName: string;
  _selectData = {};
  normForm: FormGroup;
  updateItem: any;
  _displayDataChange($event) {
    this._displayData = $event;

  };
  _refreshData() {
    this._loading = true;
    this.normService.getNorms(this._current, this._pageSize).subscribe((res: any) => {
      this._loading = false;

      this._dataSet = res.data.data;
    })

    this._refreshStatus();
  }
  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);



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
    this.operateName = 'add';
    this.showOperateModal('');
  }

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
  _deleteData(row: Norm) {
    this._dataSet.forEach(value => {
      if (value.checked) {
        this.normService.deleteNorm(value.id).subscribe(d => {
          if (d) {
            this._refreshData();
          }
        });
      }
    })

  }

  getFormControl(name) {
    return this.normForm.controls[name];
  }
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
    private normService: NormService,
    private modalService: NzModalService
  ) {
  }

  ngOnInit() {
    this._refreshData();
  }
}     