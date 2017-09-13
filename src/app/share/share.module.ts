import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const EXPORTS_MODULES = [   
  CommonModule, NgZorroAntdModule, ReactiveFormsModule,FormsModule,
  
];
@NgModule({
    imports: [EXPORTS_MODULES],   
    exports: [EXPORTS_MODULES],
    declarations: [],
    providers: [],
})
export class ShareModule { }