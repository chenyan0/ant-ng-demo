import { Injectable } from '@angular/core';
import { Norm } from "../modules/kpi/pages/myplan/data-model";
import { norms } from "../modules/kpi/pages/myplan/data-model";
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
@Injectable()
export class NormService {
    private normsUrl = 'http://localhost:3032/kpi/list';  // URL to web api

    constructor(private http: HttpClient) { }

    getNorms(current, pageSize) {
        const params = new HttpParams().set('current', current).set('pageSize', pageSize);
        return this.http.get(this.normsUrl, { params });
       
    }
    
}    