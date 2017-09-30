import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LHttp, BaseService } from 'app/base';
import { NzNotificationService } from 'ng-zorro-antd';
@Injectable()
export class TourMarkApi extends BaseService{

   constructor(http: LHttp, nns: NzNotificationService) {
    super(http, nns);
  }
      /**
     * 
     * @param
     * @returns 
     * @memberof TourMarkApi
     */
    getMarkLists(){
         return this.get('/tourmark/list');
    }
}