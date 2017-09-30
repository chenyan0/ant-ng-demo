import { Component, OnInit } from '@angular/core';
import { TourMarkApi } from "app/service/api";

@Component({
  selector: 'tourMark',
  templateUrl: 'mark.component.html',
  styleUrls: ['mark.component.less'],
})

export class MarkComponent implements OnInit {
  data = [];
  _loading: boolean;
  constructor(private api: TourMarkApi) { }
  _refreshData() {
    this._loading = true;
    this.api.getMarkLists().subscribe((res) => {
      if (res) {
        this._loading = false;
        this.data = res.data;
      }
    })
  }
  ngOnInit() {
    this._refreshData();
  }
}