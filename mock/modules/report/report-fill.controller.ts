import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';;

@Controller('reportfill')
export class FillReportController {
  dept_BO={
    "id|+1": 1,
    'value': '@ctitle(5)',
    "label":'@ctitle(5)',
  }    
  post_BO={
     "id|+1": 1,
    'value': '@ctitle(5)',
    "label":'@ctitle(5)',
  }
  /**
   * 单位部门列表
   * 
   * @param {any} req 
   * @param {any} res       
   * @memberof FillReportController
   */
  @Get('depts') 
  public async get(req, res) {
    res.status(HttpStatus.OK).json(   
      MockTool.page({
        'data|10':[this.dept_BO]
      })
    );
  }
   /**
   * 职务列表
   * 
   * @param {any} req 
   * @param {any} res       
   * @memberof FillReportController
   */
  @Get('posts') 
  public async keys(req, res) {
    res.status(HttpStatus.OK).json(   
      MockTool.page({
        'data|10':[this.post_BO]
      })
    );
  }

   

}