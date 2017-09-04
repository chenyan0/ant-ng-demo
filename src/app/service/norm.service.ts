import { Injectable } from '@angular/core';
import { Norm } from "../modules/kpi/pages/myplan/data-model";
import { norms } from "../modules/kpi/pages/myplan/data-model";
import { Http } from '@angular/http';
@Injectable()
export class NormService {
    private normsUrl = 'http://localhost:3032/kpi/list';  // URL to web api

    constructor(private http: Http) { }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getNorms(): Promise<Norm[]> {

        //    return Promise.resolve(norms);
        return this.http.get(this.normsUrl).toPromise().then(
            response =>{
                 response.json().data as Norm[];
            console.log(response.json().data);
            }
        ).catch(this.handleError);
    }

    getNormsSlowly(): Promise<Norm[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.getNorms()), 2000
            })
        })
    }
}