import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
    selector: 'modal-op-norm',
    templateUrl: 'modal-operate-norm.html'
})

export class ModalOperateNormComponent implements OnInit {
    normForm: FormGroup;
    _updateItem: any;
    _name: string;
    isConfirmLoading = false;
    operateName: string;
    isVisible = false;
    _dataSet = [];
    @Input()
    set name(value: string) {
        this._name = value;
    }
    @Input()
    set updateItem(value: any) {
        this._updateItem = value;
    }
    @Input()
    set dataSet(value: any) {
        this._dataSet = value;
    }
    constructor(
        private fb: FormBuilder,
        private subject: NzModalSubject,
    ) { }

    _submitForm() {
        for (const i in this.normForm.controls) {
            this.normForm.controls[i].markAsDirty();
        }

    }
    handleOk = (e) => {
        console.log(this._dataSet);
        this.isConfirmLoading = true;
        let formModel = this.normForm.value;
        if (this.operateName == 'add') {
            this._dataSet.push(formModel);
            this._dataSet = [].concat(this._dataSet)  //改变数据引用地址     
        } else if (this.operateName == 'md') {
            for (let d of this._dataSet) {
                console.log(d.id);
                if (d.id == this.updateItem.id) {
                    for (let a in formModel) {
                        d[a] = formModel[a];
                    }
                }
            }
        }
        setTimeout(() => {
            this._dataSet.forEach(value => value.checked = false);
            this.isVisible = false;
            this.isConfirmLoading = false;
            this.normForm.reset();
            //   this._refreshStatus();
        }, 1000)

        for (const i in this.normForm.controls) {
            this.normForm.controls[i].markAsPristine();
        }
        this.subject.destroy('onOk');
    }

    handleCancel(e) {
        this.isVisible = false;

        this.normForm.reset();
        for (const i in this.normForm.controls) {
            this.normForm.controls[i].markAsPristine();
        }
        this.subject.destroy('onCancel');
    }



    _setValue() {
        let data = this._updateItem;
        if (data == '') {
            this.normForm.setValue({
                name: '',
                standard: '',
                weight: '',
                goal: '',
                Jan: '',
                Feb: ''
            });

        } else {
            this.normForm.setValue({
                name: data.name,
                standard: data.standard,
                weight: data.weight,
                goal: data.goal,
                Jan: data.Jan,
                Feb: data.Feb
            });
        }

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
    getFormControl(name) {
        return this.normForm.controls[name];
    }

    ngOnInit() {
        this._createForm();
        this._setValue();
    }
}