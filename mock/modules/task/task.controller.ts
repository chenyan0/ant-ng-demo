import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';

@Controller('task')
export class TaskController {

  @Post('add')
  public async add(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    ); 
  }

  @Put('update')
  public async update(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Get('/get/:id')
  public async info(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Post('/query')
  public async query(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({ 
        "data|3": [{
          "id|+1": 1,
          "name": "@cword(4,8)",
          "type|2-3": 2,
          "cycle|0-4": 0,
          "createTime": "@datetime(T)",
          "nextTime": "@datetime(T)",
          "forbidSegment": "9:00-12:00",
          "status|0-6": 0
        }]
      })
    );
  }

  @Delete('/delete/:id')
  public async delete(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

}