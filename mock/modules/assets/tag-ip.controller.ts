import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';

@Controller('assets/ip')
export class TagIPController {

  @Get('/tags/all')
  public async allTag(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        'data|18': [{
          'id|+1': 1,
          'name': '@cword(3,5)',
          'gid|1-5': 1
        }]
      })
    );
  }

  @Put('/tags/update')
  public async updateTag(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Delete('/tags/:id')
  public async deleteTag(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Post('/tags/add')
  public async addTag(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Get('/tag-groups/all')
  public async allGroup(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        'data|5': [{
          'id|+1': 1,
          'name': '@cword(3,5)',
        }]
      })
    );
  }

  @Delete('/tag-groups/:id')
  public async deleteGroup(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Post('/tag-groups/add')
  public async addGroup(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Put('/tag-groups/update')
  public async updateGroup(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

}