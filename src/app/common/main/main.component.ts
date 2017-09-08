import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { UserService } from "../../service/user.service";
@Component({
  selector: 'pages-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.less'],
})

export class MainComponent implements OnInit {
  isCollapsed = false;

  constructor(
    private router: Router,
    private nms: NzModalService,
    private us: UserService
  ) {
  }
  onLogout() {
    console.log('sa');
    this.nms.confirm({
      title: '确定退出 ?',
      okText: '离开',
      cancelText: '留下',
      onOk: () => {
        this.us.logout().subscribe((d) => {
          if (d) {
            this.router.navigateByUrl('/login')
          }
        })
      }
		
    });
  }

  ngOnInit() {
  }
}