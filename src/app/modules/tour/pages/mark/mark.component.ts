import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tourMark',
    templateUrl: 'mark.component.html',
    styleUrls: ['mark.component.less'],     
})
  
export class MarkComponent implements OnInit {
    data = [ {
    name   : 'John Brown',
    value:'1'
  }, {
    name   : 'Jim Green',
     value:'1'
  }, {
    name   : 'Joe Black',
     value:'1'
  }, {
    name   : 'Jim Red',
     value:'1'
  }, {
    name   : 'Jake White',
     value:'1'
  } ];
    constructor() { }

    ngOnInit() { }
}