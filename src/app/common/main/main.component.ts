import { Component, OnInit } from '@angular/core';
import { Router,RouterOutlet,RouterLinkActive   } from '@angular/router';

@Component({
    selector: 'pages-main',
    templateUrl: 'main.component.html',
      styleUrls: ['main.component.less'],
})   

export class MainComponent implements OnInit {
    isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }
}