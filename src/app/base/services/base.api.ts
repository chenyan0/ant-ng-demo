import { Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';
import { LHttp } from './http';
import { HttpClient, HttpParams } from '@angular/common/http';
/**
 * API服务的基础抽象类
 */
export abstract class BaseApi {
    constructor(protected http: LHttp,protected notification: NzNotificationService) { }
    /**
     * Get请求
     * @param {string} url 请求的URL地址
     * @param {*} [params] get 提交参数
     * @returns {Observable<any>}
     * @memberOf BaseApi
     */
    get(url: string, params?: any): Observable<any> {
        return this.http.httpGet(this.getUrl(url), params, this.getToken())
            .map((res) => this.handlerMap(res, this.notification))
            .catch((res) => this.handlerError(res, this.notification));
    }


    /**
     * Post请求
     * @param {string} url 请求的URL地址
     * @param {*} [params] post 提交参数
     * @returns {Observable<any>}
     * @memberOf BaseApi
     */
    post(url: string, params?: any): Observable<any> {
        return this.http.httpPost(this.getUrl(url), params, this.getToken())
            .map((res) => this.handlerMap(res, this.notification))
            .catch((res) => this.handlerError(res, this.notification));
    }
    /**
 * 获取token的方法
 * @abstract
 * @returns {string} token值
 * @memberOf BaseApi
 */
    abstract getToken(): string;

    /**
     * 公用获取url的方法
     * 可以选择拼装URL
     * @abstract
     * @param {string} url
     * @returns {string}
     * @memberOf BaseApi
     */
    abstract getUrl(url: string): string;


     protected handlerMap(result: any, notification: NzNotificationService) {
    const json = result.json();
    switch (json.code) {
      case 0:
        // 返回成功
        return json.data ? json.data : true;
      case 2:
        // 返回token超时
        return null
      default:
        notification.error('错误', json.msg);
        return null;
    }
  }

  protected handlerError(result, notification: NzNotificationService) {
    notification.error('网络错误', result);
    return Observable.throw(result);
  }
}