import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "environments/environment";

@Injectable()
export class PlanCheckApi {
 BaseUrl: string = '';
    constructor(
        private http :HttpClient
    ) { 
         this.BaseUrl=environment.server;
    }
    /**
     * 
     * @param year 年份
     * @returns 
     * @memberof PlanCheckApi
     */
    getlist(year){
        const params=new HttpParams().set('year',year);
         return this.http.get(this.BaseUrl+'/kpicheck/list',{params});
    }
}