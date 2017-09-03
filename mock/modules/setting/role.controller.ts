import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';

@Controller('api/roles')
export class RoleController {

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

  @Get('fetch')
  public async info(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        'data': {
          'id|+1': 1,
          'roleName': '@cname',
          'ips|0-10': ['@ip'],
          'ipTags|0-10': ['@integer(1,18)'],
          'urls|0-10': ['http://@domain'],
          'urlTags|0-10': ['@integer(1,18)'],
          'users|1-12': [{
            'id|+1': 1,
            'userName': '@cname',
            'lastLoginTime': '@datetime(T)'
          }],
          'roleFunctions': [
            {
              'functionId': 'github',
              'privileges|4-15': 4
            },
            {
              'functionId': 'assets',
              'privileges|0-15': 0
            }
          ]
        }
      })
    );
  }

  @Post('query')
  public async query(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({
        'data|18': [{
          'id|+1': 1,
          'roleName': '@cname',
          'users|1-12': [{ 'id|+1': 1 }]
        }]
      })
    );
  }

  @Delete('delete')
  public async delete(req, res, @Param('id') id, @Param('transitUsers') transitUsers, @Param('targetRoleId') targetRoleId) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Put('move')
  public async move(req, res, @Param('userId') userId, @Param('roleId') roleId, @Param('targetRoleId') targetRoleId) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

}