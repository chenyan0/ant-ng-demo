import { Component, OnInit } from '@angular/core';
import { Norm, norms } from './data-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NormService } from "../../../../service/norm.service";
import { NzModalService } from 'ng-zorro-antd';
import { ModalOperateNormComponent } from '../../modals/modal-operate-norm/modal-operate-norm.component';
@Component({
  selector: 'my-plan',
  templateUrl: 'myplan.component.html'
})

export class MyPlanComponent implements OnInit {
  norm: Norm;
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _dataSet = [];
  _indeterminate = false;
  isVisible = false;
  isConfirmLoading = false;
  operateName: string;
  _selectData = {};
  normForm: FormGroup;
  updateItem: any;
  currentModal;
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
    this.operateName = 'add';
    this.isVisible = true;
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
    this.showOperateModal(this._selectData );


  }
  _deleteData() {
    let _dataSet = [];
    this._dataSet.forEach(value => {
      if (!value.checked) {
        _dataSet.push(value);
      }
    })
    this._dataSet = [].concat(_dataSet);
    this._refreshStatus();
  }
  showOperateModal(data) {
    const subscription = this.modalService.open({
      title: '对话框标题',
      content: ModalOperateNormComponent,
      onOk() {
        
      },
      onCancel() {
        
      },
      footer: false,
      componentParams: {
        name: '测试渲染Component',
        updateItem:data,
        dataset:this._dataSet
      }
    });
    subscription.subscribe(result => {
    })
  }

  _submitForm() {
    for (const i in this.normForm.controls) {
      this.normForm.controls[i].markAsDirty();
    }

  }

  constructor(
    private fb: FormBuilder,
    private normService: NormService,
    private modalService: NzModalService
  ) {
  }

  _createForm() {
    this.normForm = this.fb.group({
      name: [''],
      standard: [''],
      weight: [''],
      goal: [''],
      Jan: [''],
      Feb: ['']
    });
  }
  _getNorms() {
    this.normService.getNormsSlowly().then(norms => this._dataSet = norms);
    console.log(this._dataSet);
  }
  ngOnInit() {
    this._getNorms();
    // this._createForm();
  }
}