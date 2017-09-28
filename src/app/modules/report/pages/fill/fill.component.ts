import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ReportFillApi } from "../../../../service/api/report-fill.api";

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
  constructor(private fb: FormBuilder,private api:ReportFillApi) { }

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