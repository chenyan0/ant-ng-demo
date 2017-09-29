import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NzModalSubject,NzMessageService } from 'ng-zorro-antd';
import { NormApi } from "app/service/api";

@Component({
    selector: 'modal-op-norm',
    templateUrl: 'modal-operate-norm.html',
    styles: [
        `
       .customize-modal-footer {
    border-top: 1px solid #e9e9e9;
    padding: 10px 18px 0 10px;
    text-align: right;
    border-radius: 0;
    margin: 15px -16px -5px -16px;
}
    `
    ]

})

export class ModalOperateNormComponent implements OnInit {
    normForm: FormGroup;
    _updateItem: any;
    _type: string;
    isConfirmLoading = false;
    isVisible = false;
    _dataSet = [];
    submitted: boolean = false;
    @Input()
    set type(value: string) {
        this._type = value;
    }
    @Input()
    set updateItem(value: any) {
        this._updateItem = value;
    }

    constructor(
        private fb: FormBuilder,
        private NormApi: NormApi,
        private subject: NzModalSubject,
        private nms:NzMessageService
    ) { }

    _submitForm() {
        for (const i in this.normForm.controls) {
            this.normForm.controls[i].markAsDirty();
        }
        this.submitted = true;
        if (this._type == 'add') {
            this.NormApi.addNorm(this.getFormControl('name').value, this.getFormControl('weight').value, this.getFormControl('standard').value, this.getFormControl('goal').value, this.getFormControl('Jan').value, this.getFormControl('Feb').value, ).subscribe(d => {
                if (d) {
                      this.nms.success('新增指标成功！');
                    this.subject.next(true);
                    this.onCancel();
                }
                this.submitted = false;
            }, () => { this.submitted = false; });   
        } else if (this._type == 'modify') {
            this.NormApi.updateNorm(this.getFormControl('name').value, this.getFormControl('weight').value, this.getFormControl('standard').value, this.getFormControl('goal').value, this.getFormControl('Jan').value, this.getFormControl('Feb').value, ).subscribe(d => {
                if (d) {
                      this.nms.success('修改指标成功！');
                    this.subject.next(true);
                    this.onCancel();
                }
                this.submitted = false;
            }, () => { this.submitted = false; });
        }
    }




    /**
     * 关闭modal
     * 
     * @memberof ModalOperateNormComponent
     */
    onCancel() {
        this.subject.destroy('onCancel');
    }
    /**
     * 表单赋值
     * 
     * @memberof ModalOperateNormComponent
     */
    _setValue() {
        const data = this._updateItem;
        this.normForm.setValue({
            name: data == '' ? '' : data.name,
            standard: data == '' ? '' : data.standard,
            weight: data == '' ? '' : data.weight,
            goal: data == '' ? '' : data.goal,
            Jan: data == '' ? '' : data.Jan,
            Feb: data == '' ? '' : data.Feb
        });


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