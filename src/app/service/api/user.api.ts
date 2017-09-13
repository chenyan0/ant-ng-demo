import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "environments/environment";

@Injectable()
export class UserApi {
    BaseUrl: string = '';
    constructor(private http: HttpClient) { 
        this.BaseUrl=environment.server;
     }

   /**
   * 用户登录
   * 用户登录系统
   * @param {*} form 登录表单
   * @returns {Observable<any>} 
   * @memberof UserApi
   */
  login(form: any): Observable<any> {
    return this.http.post(this.BaseUrl+'/user/login', form);
  }

  /**
   * 用户注销
   * 用户注销系统
   * @param 
   * @returns {Observable<any>}
   * @memberof UserApi
   */
  logout():Observable<any>{
    return this.http.get(this.BaseUrl+'/user/logout');
  }
 
}           