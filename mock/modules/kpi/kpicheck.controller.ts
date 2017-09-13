import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';;

@Controller('kpicheck')
export class KpiCheckController {
  planBo={
    "id|+1": 1,
    'place': '@cword(3,5)',
    "department":'@cword(3,5)',
    'coding|1-10000':10000,
    'name': '@cname()',
    'Job': '@cword(3,8)',
    'year': '@date()',
    'status':'@boolean()'

  }
  /**
   * 计划审核列表
   * 
   * @param {any} req 
   * @param {any} res       
   * @memberof KpiCheckController
   */
  @Get('list') 
  public async keys(req, res) {
    res.status(HttpStatus.OK).json(   
      MockTool.page({
        'data|10': [this.planBo]
      })
    );
  }

   

}