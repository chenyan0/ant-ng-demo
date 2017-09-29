import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "environments/environment";
@Injectable()
export class ReportFillApi {
 BaseUrl: string = '';
    constructor(
        private http :HttpClient
    ) { 
         this.BaseUrl=environment.server;
    }
    /**
     * 
     * @param
     * @returns 
     * @memberof ReportFillApi
     */
    getDepts(){
         return this.http.get(this.BaseUrl+'/reportfill/depts');
    }
       /**
     * 
     * @param 
     * @returns 
     * @memberof ReportFillApi
     */
    getPosts(){
         return this.http.get(this.BaseUrl+'/reportfill/posts');
    }
       /**
     * 
     * @param name 姓名
     * @param dept 单位/部门
     * @param post 岗位
     * @param time 填报时间
     * @param gwrz 岗位认知
     * @param gzyj 岗位业绩
     * @param gzjh 岗位下一步计划
     * @returns 
     * @memberof ReportFillApi
     */
    save(name,dept,post,time,gwrz,gzyj,gzjh){
        console.log(name,dept,post,time,gwrz,gzyj,gzjh);
        const params = new HttpParams().set('name', name).set('dept', dept).set('post',post).set('gwrz',gwrz).set('gzyj',gzyj).set('gzjh',gzjh);
        return this.http.post(this.BaseUrl+'/reportfill/save',{params});
    }
    
}