import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'btn-upload',
    templateUrl: 'btn-upload.component.html',
    styleUrls:['btn-upload.component.less']
})

export class BtnUploadComponent implements OnInit {
    @Input() btnText: string;
    constructor() { }
   
    ngOnInit() { 
        console.log(this.btnText);    // 父组件内传入的值或者我们自己设置的初始值0
        
    }
}