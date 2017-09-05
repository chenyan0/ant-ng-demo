import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';;

@Controller('kpi')
export class KpiController {

  @Get('list') 
  public async keys(req, res) {
    res.status(HttpStatus.OK).json(   
      MockTool.page({
        'data|6': [{  
           "id|+1": 1,
          'name': '@cword(3,5)',
          "weight|1-100": 100,
          'standard': '@cword(3,15)',
          'goal': '@cword(3,15)',
          'Jan': '@cword(3,15)',
          'Feb': '@cword(3,15)'
        }]
      })
    );
  }

  @Post('keyword')
  public async keyword(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({})
    );
  }

  @Post('repo/query/:id')
  public async repos(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({
        'data|18': [{
          'repoId|+1': 1,
          'owner': '@cword(3,5)',
          'ownerEmail': '@email',
          'repositoryName': '@cword(3,5)',
          'repositoryUrl': '@url()',
          'scanTime': '@datetime(T)',
          'submitter': '@cword(3,5)',
          'keyword': '@cword(3,5)'
        }]
      })
    );
  }


  @Post('repo/cancel/query')
  public async cancelList(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({
        'data|18': [{
          'repoId|+1': 1,
          'owner': '@cword(3,5)',
          'ownerEmail': '@email',
          'repositoryName': '@cword(3,5)',
          'repositoryUrl': '@url()',
          'scanTime': '@datetime(T)',
          'submitter': '@cword(3,5)',
          'keyword': '@cword(3,5)'
        }]
      })
    );
  }


  @Get('repo/cancel')
  public async cancel(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({})
    );
  }

  @Post('repo/code/query')
  public async codeList(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({
        'data|2': [{
          'repoId|+1': 1,
          'fileName': '@cword(3,5)',
          'fileUrl': '@url()',
          'scanTime': '@datetime(T)',  
          "secKeyword": 'div', 
          "code": [   
            {
              "27": " <div class=\"col-lg-6\">",
              "28": " <strong>Grafico</strong>",
              "29": "</div>"
            }
          ]
        }]
      })
    );
  }
}