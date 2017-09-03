import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';

@Controller('threaten')
export class ThreatenController {

  @Get('/info')
  public async(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        vulName: 'PHP 5.3.x <5.3.15 存在多个漏洞',
        asset: '173.192.110.76',
        level: '高危',
        des: 'PHP 5.3.15之前和5.4.5之前的5.4.x之前版本中的流实现提供的_php_stream_scandir函数存在一个未明安全漏洞',
        poc: 'Version source : X-Powered-By: PHP/5.3.14 Installed version : 5.3.14 Fixed version : 5.3.15',
        ftime: "@datetime(T)",  
      })
    );
  }

  @Post('/query')
  public async query(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({
        "data|5": [{
          asset: '192.168.1.1',
          "childen|1-2": [
            {
              "id|+1": 1,
              "email": "@cword(4,8)",
              "type|2-3": 2,
              "createTime": "@datetime(T)",
              "nextTime": "@datetime(T)",
              "forbidSegment": "9:00-12:00",
              "status|0-6": 0
            }
          ]
        }]
      })
    );
  }

}