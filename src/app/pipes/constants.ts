/**
 * 状态字典
 * 
 * @export
 * @class Constants
 */
export class Constants {
  /**
   * 计划状态
   * 
   * @static
   * @memberof Constants
   */
  public static PLAN_STATUS = ['未审核', '审核已通过', '审核未通过'];
}

/**
 * 获取状态值
 * 
 * @export
 * @param {string} type 类型
 * @param {(string | number)} key 键
 * @param {string} defaultResult 默认值
 * @returns 
 */
export function getStatusValue(type: string, key: string | number, defaultResult: string = '-') {
  switch (type) {
    case 'plan_status':
      return Constants.PLAN_STATUS[key] || defaultResult;
    default:
      return defaultResult;
  }
}