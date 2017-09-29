import { BaseApi,LHttp } from "../services";
import { CommonTool } from "../tools";
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';

export class BaseService extends BaseApi {
    constructor(http: LHttp, nns: NzNotificationService) {
        super(http,nns);
     }
 getToken(): string {
    return CommonTool.getToken();
  }

  getUrl(url: string): string {
    return CommonTool.getUrl(url);
  }

}