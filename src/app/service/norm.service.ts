import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Headers} from '@angular/http';

import { Norm, norms } from "../modules/kpi/pages/myplan/data-model";
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class NormService {

    constructor(private http: HttpClient) { }


   /**
   * KPI指标列表
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   * @memberof NormService
   */
    getNorms(current,pageSize) {
        const params = new HttpParams().set('curPage', current).set('pageSize', pageSize);
        return this.http.get('http://localhost:3032/kpi/list',{params});
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
   * @memberof NormService
   */
    addNorm( name:string,standard:string,weight:number,goal:string,Jan:string,Feb:string): Observable<any> {
        return this.http.post('http://localhost:3032/kpi/add', { name: name, standard: standard, weight: weight,goal: goal,Jan: Jan ,Feb: Feb});
    }

   /**
   * 删除KPI指标
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   * @memberof NormService
   */
    deleteNorm(id: number){
        // const headers = new HttpHeaders().set("X-CustomHeader", "custom header value");
        return this.http.delete('http://localhost:3032/kpi/delete')
       
    }
    /**
   * 更新KPI指标
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   * @memberof NormService
   */
     updateNorm( name:string,standard:string,weight:number,goal:string,Jan:string,Feb:string): Observable<any> {
        return this.http.post('http://localhost:3032/kpi/update', { name: name, standard: standard, weight: weight,goal: goal,Jan: Jan ,Feb: Feb});
    }


}    