import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LHttp, BaseService } from 'app/base';
import { NzNotificationService } from 'ng-zorro-antd';
@Injectable()
export class ReportFillApi extends BaseService{
 constructor(http: LHttp, nns: NzNotificationService) {
    super(http, nns);
  }
    /**
     * 
     * @param
     * @returns 
     * @memberof ReportFillApi
     */
    getDepts(){
         return this.get('/reportfill/depts');
    }
       /**
     * 
     * @param 
     * @returns 
     * @memberof ReportFillApi
     */
    getPosts(){
         return this.get('/reportfill/posts');
    }
       /**
     * 
     * @param form 填报报告表单
     * @returns 
     * @memberof ReportFillApi
     */
    save(form: any){
        return this.post('/reportfill/save',form);
    }
    
}