import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';

@Controller('weak')
export class WeakPasswordController {

  @Post('/query')
  public async query(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({
        "data|10": [{
          "id|+1": 1,
          "email": "@cword(4,8)",
          "type|2-3": 2,
          "createTime": "@datetime(T)",
          "nextTime": "@datetime(T)",
          "forbidSegment": "9:00-12:00",
          "status|0-6": 0
        }]
      })
    )
  }

}