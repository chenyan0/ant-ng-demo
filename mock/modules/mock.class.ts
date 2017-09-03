import * as Mock from 'mockjs';

export class MockTool {
  static mock(data: any) {
    data = Object.assign({ code: 0, msg: '访问MOCK接口成功' }, data);
    return Mock.mock(data)  
  }

  static page(data: any) { 
    return {
      code: 0, msg: '访问MOCK接口成功', data: {
        currentPage: 1,
        data: Mock.mock(data).data,
        pageSize: 5, 
        total: 87,
        totalPage: 5    
      }
    }; 
  }
}



