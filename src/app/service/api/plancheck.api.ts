import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LHttp, BaseService } from 'app/base';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class PlanCheckApi extends BaseService {
 constructor(http: LHttp, nns: NzNotificationService) {
    super(http, nns);
  }
    /**
     * 
     * @param year 年份
     * @returns 
     * @memberof PlanCheckApi
     */
    getlist(year){
        const params=new HttpParams().set('year',year);
         return this.get('/kpicheck/list',{params});
    }
}