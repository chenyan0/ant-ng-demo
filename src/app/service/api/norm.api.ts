import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LHttp, BaseService } from 'app/base';
import { NzNotificationService } from 'ng-zorro-antd';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class NormApi extends BaseService {
 constructor(http: LHttp, nns: NzNotificationService) {
    super(http, nns);
  }
   /**
   * KPI指标列表
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
    getNorms(current,pageSize) {
        return this.get('/kpiPlan/list',{curPage:current,pageSize:pageSize});
    }

   /**
   * 新增KPI指标
   * 
   * @param  form      新增表单
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
    addNorm(form:any): Observable<any> {
        return this.post('/kpiPlan/add', form);
    }

   /**
   * 删除KPI指标
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
    deleteNorm(id: number){
        return this.post('/kpiPlan/delete',{id:id})
       
    }
    /**
   * 更新KPI指标
   * 
   * @param form 更新表单
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
     updateNorm(form): Observable<any> {
        return this.post('/kpiPlan/update', form);
    }


}       