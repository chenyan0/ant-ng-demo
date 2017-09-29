import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

import { ReportFillApi } from "app/service/api";

@Component({
  selector: 'report-fill',
  templateUrl: 'fill.component.html',
  styleUrls: ['fill.component.less']
})

export class FillComponent implements OnInit {
  fillReportForm: FormGroup;
  _date = null;
  selectedDept;
  searchDepts;
  selectedPost;
  searchPosts;
  load(eve){
    console.log(eve);
  }
  submitForm() {
    for (const i in this.fillReportForm.controls) {
      this.fillReportForm.controls[i].markAsDirty();
    }  
    this.api.save(this.getFormControl('userName').value,this.getFormControl('department').value,
    this.getFormControl('post').value,
    this.getFormControl('fillTime').value,
    this.getFormControl('gwrz').value,
    this.getFormControl('gzyj').value,
    this.getFormControl('gzjh').value,
    ).subscribe((res:any)=>{
      if(res){
        this.nms.success('报告提交成功！');
      }
    })
  }
  getDepts(){
      this.api.getDepts().subscribe((res: any) =>{
        this.searchDepts =res.data.data;   
      })
  }
  getPosts(){
      this.api.getPosts().subscribe((res: any) =>{
        this.searchPosts =res.data.data;   
      })
  }
    /**
   * 获取表单值
   * @param name 
   */
  getFormControl(name) {
    return this.fillReportForm.controls[name];
  }
  constructor(
    private fb: FormBuilder,
    private api:ReportFillApi,
    private nms:NzMessageService
  ) { }

  ngOnInit() {
    this.getPosts();
    this.getDepts();
    this.fillReportForm = this.fb.group({
      userName: [null, [Validators.required]],
      department: [null, [Validators.required]],
      post: [null, [Validators.required]],
      fillTime: [null, [Validators.required]],
      gwrz: [null, [Validators.required]],
      gzyj: [null, [Validators.required]],
      gzjh: [null, [Validators.required]]
    });
  }
}