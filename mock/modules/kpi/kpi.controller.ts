import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';;

@Controller('kpi')
export class KpiController {
  normBo = {
    "id|+1": 1,
    'name': '@cword(3,5)',
    "weight|1-100": 100,
    'standard': '@cword(3,15)',
    'goal': '@cword(3,15)',
    'Jan': '@cword(3,15)',
    'Feb': '@cword(3,15)'
  };
   /**
   * 指标列表
   * 
   * @param {any} req 
   * @param {any} res 
   * @memberof KpiController
   */
  @Get('list') 
  public async keys(req, res) {
    res.status(HttpStatus.OK).json(   
      MockTool.page({
        'data|6': [this.normBo]
      })
    );
  }
   /**
   * 新增指标
   * 
   * @param {any} req 
   * @param {any} res 
   * @memberof KpiController
   */
 @Post('add')
  public async add(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }
 /**
   * 删除指标
   * 
   * @param {any} req 
   * @param {any} res 
   * @memberof KpiController
   */
  @Post('delete')
  public async delete(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }
  /**
   * 新增指标
   * 
   * @param {any} req 
   * @param {any} res 
   * @memberof KpiController
   */
 @Post('update')
  public async update(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }


}