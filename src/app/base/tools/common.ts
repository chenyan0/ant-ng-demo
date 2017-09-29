import { environment } from 'environments/environment';  


export class CommonTool  {
    constructor() { }
      /**
   * 获取Token
   * 
   * @static
   * @returns {string}
   * 
   * @memberOf CommonTool
   */
  static getToken(): string {
    return localStorage.getItem(environment.token);
  }
 /**
   * 获取Url
   * 
   * @static
   * @param {string} url
   * @returns {string}
   * 
   * @memberOf CommonTool
   */
  static getUrl(url: string): string {
    return environment.server + url;
  }
 
}
