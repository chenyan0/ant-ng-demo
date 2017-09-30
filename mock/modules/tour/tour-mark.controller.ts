import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';;

@Controller('tourmark')
export class TourMarkController {
  /**
   * 360打分名单列表
   * 
   * @param {any} req 
   * @param {any} res       
   * @memberof TourMarkController
   */
  @Get('list') 
  public async list(req, res) {
    res.status(HttpStatus.OK).json(   
      MockTool.page({
        'data|10':[{
            "id|+1":1,
            "name":'@cname'
        }]
      })
    );
  }


   

}