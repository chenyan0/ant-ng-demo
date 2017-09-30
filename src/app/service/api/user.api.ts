import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LHttp, BaseService } from 'app/base';
import { NzNotificationService } from 'ng-zorro-antd';
@Injectable()
export class UserApi extends BaseService {
    constructor(http: LHttp, nns: NzNotificationService){
      super(http, nns);
    }

   /**
   * 用户登录
   * 用户登录系统
   * @param {*} form 登录表单
   * @returns {Observable<any>} 
   * @memberof UserApi
   */
  login(form: any): Observable<any> {
    return this.post('/user/login', form);
  }

  /**
   * 用户注销
   * 用户注销系统
   * @param 
   * @returns {Observable<any>}
   * @memberof UserApi
   */
  logout():Observable<any>{
    return this.get('/user/logout');
  }
 
}           