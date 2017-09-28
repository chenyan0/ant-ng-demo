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
     * @param year 年份
     * @returns 
     * @memberof ReportFillApi
     */
    getDepts(){
         return this.http.get(this.BaseUrl+'/reportfill/depts');
    }
      getPosts(){
         return this.http.get(this.BaseUrl+'/reportfill/posts');
    }
    
}