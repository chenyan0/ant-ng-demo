import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';


@Controller()
export class UserController {

  @Post('/api/users/add')
  public async add(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Put('/api/users/update')
  public async update(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Put('/api/users/reset_password')
  public async resetPassword(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Get('/api/users/fetch')
  public async info(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        'data': {
          'id': 1,
          'userName': '@cword(5)',
          'email': '@email',
          'phone': /^1(3|4|5|7|8)\d{9}$/,
          'organizationId': '@cword(3)',
          'roleId': 1
        }
      })
    );
  }

  @Post('/api/users/query')
  public async query(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.page({
        'data|18': [{
          'id|+1': 1,
          'userName': '@cname',
          'email': '@email',
          'phone': /^1(3|4|5|7|8)\d{9}$/,
          'organizationId': '@cword(2)',
          'roles|1-1': [{
            'roleName': '@cname'
          }],
          'lastLoginTime': '@datetime(T)'
        }]
      })
    );
  }

  @Delete('/api/users/delete')
  public async delete(req, res, @Param('id') id) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Post('/api/users/change_password')
  public async changePassword(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

  @Post('/user/login')
  public async login(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        data: {
          token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDE2NTkyNzEsInVzZXJuYW1lIjpudWxsLCJ2YWxpZGF0ZV90eXBlIjpudWxsLCJyb2xlcyI6WzEsNF0sIm5iZiI6MTUwMTY1MjA3MSwidXNlcmlkIjoxLCJhY3Rpb24iOiJMT0dJTiIsImp0aSI6IjE0NmQwYmU5LTZjMjYtNGRkOC05MmM0LWNlODE1M2NiYmEwYiIsImNpZCI6MX0.VjJrR5sy_Ddp7eHgp7WLOZu_Lqg8VZOjoy9oBg3J698",
          login_name: '数字观星',
          nick_name: "Admin",
          uid: 1
        }
      })
    );
  }

  @Get('/user/logout')
  public async logout(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        data: {
        }
      })
    );
  } 

  @Delete('/users/deleteByRoleId')
  public async deleteByRole(req, res, @Param('roleId') roleId) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

}