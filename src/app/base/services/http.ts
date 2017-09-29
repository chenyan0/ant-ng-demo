import { Injectable } from '@angular/core';
import {
  Http, ConnectionBackend, XHRBackend, ResponseContentType,
  RequestOptions, Request, RequestOptionsArgs, Response, Headers, Jsonp
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs';
declare var saveAs;

@Injectable()
export class LHttp extends Http {
  constructor(backend: ConnectionBackend, options: RequestOptions, jsonp: Jsonp) {
    super(backend, options);
    // 如果是测试环境则mock数据
    if (backend instanceof MockBackend) {
      let mock = <MockBackend>backend;
      mock.connections.subscribe((c: MockConnection) => {
        // Rap 方式mock数据
        let url = c.request.url;
        if (url.indexOf('?') === -1) { url += '?'; }
        url += '&callback=JSONP_CALLBACK';
        jsonp.get(url).subscribe(response => {
          c.mockRespond(response);
        });
        // mock.js 方式mock数据
        // mockHandler(c);
      });
    }
  }

  /**
   * 封装的 http Get 请求
   * @param {string} url 完整的url（包含http:// 协议）
   * @param {*} [params] get 提交参数
   * @param {string} [token] 用户认证token
   * @returns {Observable<any>}
   * @memberOf LHttp
   */
  httpGet(url: string, params?: any, token?: string): Observable<any> {
    url = this.mergeUrl(url, params);
    return super.get(url, this.getRequestOptions(token));
  }

  /**
   * 封装的 htt POST 请求
   * @param {string} url 完整的url（包含http:// 协议）
   * @param {*} [params] get 提交参数
   * @param {string} [token] 用户认证token
   * @returns {Observable<any>}
   * @memberOf LHttp
   */
  httpPost(url: string, params?: any, token?: string): Observable<any> {
    if (params && typeof params === 'object') {
      params = JSON.stringify(params);
    }
    return super.post(url, params, this.getRequestOptions(token));
  }

  /**
   * 封装的 http Put 请求
   * @param url 完整的url(包含协议)
   * @param params 提交参数
   * @param token 用户认证token
   */
  httpPut(url: string, params?: any, token?: string): Observable<any> {
    if (params && typeof params === 'object') {
      params = JSON.stringify(params);
    }
    return super.put(url, params, this.getRequestOptions(token));
  }

  /**
  * 封装的 http Delete 请求
  * @param {string} url 完整的url（包含http:// 协议）
  * @param {*} [params]  提交参数
  * @param {string} [token] 用户认证token
  * @returns {Observable<any>}
  * @memberOf LHttp
  */
  httpDelete(url: string, params?: any, token?: string): Observable<any> {
    url = this.mergeUrl(url, params);
    return super.delete(url, this.getRequestOptions(token));
  }

  /**
   * 封装的下载
   * @param {string} url 完整的url（包含http:// 协议）
   * @param {*} [params] get 提交参数
   * @param {string} [token] 用户认证token
   * @returns {Observable<any>}
   * @memberOf LHttp
   */
  download(url: string, params?: any, token?: string): Observable<any> {
    let options = this.getRequestOptions(token);
    options.responseType = ResponseContentType.Blob;
    url = this.mergeUrl(url, params);
    return super.get(url, options).map(res => res.blob());
  }

  /**
   * 下载文件
   * @param {string} url 完整的url（包含http:// 协议）
   * @param {string} fileName 导出的文件名
   * @param {*} [params] get 提交参数
   * @param {string} [token] 用户认证token
   * @memberOf LHttp
   */
  downloadFile(url: string, fileName: string, params?: any, token?: string): void {
    this.download(url, params, token).subscribe(blob => {
      // FileSaver.js
      saveAs(blob, fileName);
    });
  }

  /** 获取请求配置 */
  private getRequestOptions(token?: string): RequestOptionsArgs {
    let options: RequestOptionsArgs = { headers: new Headers() };
    options.headers.set('Content-Type', 'application/json;charset=UTF-8');
    if (token && token !== '') {
      options.headers.set('Authorization', `Bearer ${token}`);
    }
    return options;
  }

  /** 拼接Url和参数 */
  private mergeUrl(url: string, params?: any) {
    if (params && typeof params === 'object') {
      url += '?';
      let i = 0;
      // class 用for..of循环不出属性，这里转换成json object
      if (params.constructor.name !== 'Object') {
        params = JSON.parse(JSON.stringify(params));
      }
      for (let key in params) {
        if (i !== 0) {
          url += '&';
        }
        if (params[key] != null || params[key] !== undefined) {
          url += `${key}=${params[key]}`;
        }
        i++;
      }
    }
    return url;
  } // mergeUrl function end
}

export function httpFactory(backend: XHRBackend, options: RequestOptions, jsonp: Jsonp) {
  return new LHttp(backend, options, jsonp);
}

// 正式环境httpProvide
export const lhttpProvide = [{
  provide: LHttp,
  useFactory: httpFactory,
  deps: [XHRBackend, RequestOptions, Jsonp]
}];

// 测试环境 mock http provide
export const lhttpMockProvide = [MockBackend, {
  provide: LHttp,
  useFactory: httpFactory,
  deps: [MockBackend, RequestOptions, Jsonp] 
}];
