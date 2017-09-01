import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
    selector: 'modal-op-norm',
    templateUrl: 'modal-operate-norm.html'
})

export class ModalOperateNormComponent implements OnInit {
    normForm: FormGroup;
    updateItem: any;
    _name: string;

    @Input()
    set name(value: string) {
        this._name = value;
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

    handleCancel(e) {
        this.subject.destroy('onCancel');
    }
    _setValue() {
        this.normForm.setValue({
            name: this.updateItem.name,
            standard: this.updateItem.standard,
            weight: this.updateItem.weight,
            goal: this.updateItem.goal,
            Jan: this.updateItem.Jan,
            Feb: this.updateItem.Feb
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
        this._setValue();
        this._createForm();


    }
}