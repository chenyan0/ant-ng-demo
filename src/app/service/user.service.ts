import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class UserService {

    constructor(private http: HttpClient) { 
        
    }

   /**
   * 用户登录
   * 用户登录系统
   * @param {*} form 登录表单
   * @returns {Observable<any>} 
   * @memberof UserService
   */
  login(form: any): Observable<any> {
    return this.http.post('http://localhost:3032/user/login', form);
  }
}