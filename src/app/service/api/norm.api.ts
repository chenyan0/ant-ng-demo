import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "environments/environment";
@Injectable()
export class NormApi {
  BaseUrl: string = '';
    constructor(private http: HttpClient) { 
        this.BaseUrl=environment.server;
     }


   /**
   * KPI指标列表
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
    getNorms(current,pageSize) {
        const params = new HttpParams().set('curPage', current).set('pageSize', pageSize);
        return this.http.get(this.BaseUrl+'/kpiPlan/list',{params});
    }

   /**
   * 新增KPI指标
   * 
   * @param {string} name      指标名称
   * @param {string} standard  评分标准
   * @param {number} weight    权重
   * @param {string} goal      年度目标
   * @param {string} Jan       一月
   * @param {string} Feb       二月
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
    addNorm( name:string,standard:string,weight:number,goal:string,Jan:string,Feb:string): Observable<any> {
        return this.http.post(this.BaseUrl+'/kpiPlan/add', { name: name, standard: standard, weight: weight,goal: goal,Jan: Jan ,Feb: Feb});
    }

   /**
   * 删除KPI指标
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
    deleteNorm(id: number){
        return this.http.post(this.BaseUrl+'/kpiPlan/delete',{id:id})
       
    }
    /**
   * 更新KPI指标
   * 
   * @param {number} id 
   * @param {string} name      指标名称
   * @param {string} standard  评分标准
   * @param {number} weight    权重
   * @param {string} goal      年度目标
   * @param {string} Jan       一月
   * @param {string} Feb       二月
   * @returns {Observable<any>} 
   * @memberof NormApi
   */
     updateNorm( name:string,standard:string,weight:number,goal:string,Jan:string,Feb:string): Observable<any> {
        return this.http.post(this.BaseUrl+'/kpiPlan/update', { name: name, standard: standard, weight: weight,goal: goal,Jan: Jan ,Feb: Feb});
    }


}       