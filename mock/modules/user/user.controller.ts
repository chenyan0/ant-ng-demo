import { Response } from 'express';
import { Controller, Get, Post, HttpStatus, Req, Res, Param, Body, Put, Delete } from '@nestjs/common';
import { MockTool } from '../mock.class';;

@Controller('user')
export class UserController {

  /**
   * 用户登录
   * 用户登录系统
   * @param {any} req 
   * @param {any} res 
   * @memberof UserController
   */
  @Post('login')     
  public async login(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock({
        data: {
          "uid": 1,
          "nick_name": "@cname",
          "login_name": "admin",
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDE2NTkyNzEsInVzZXJuYW1lIjpudWxsLCJ2YWxpZGF0ZV90eXBlIjpudWxsLCJyb2xlcyI6WzEsNF0sIm5iZiI6MTUwMTY1MjA3MSwidXNlcmlkIjoxLCJhY3Rpb24iOiJMT0dJTiIsImp0aSI6IjE0NmQwYmU5LTZjMjYtNGRkOC05MmM0LWNlODE1M2NiYmEwYiIsImNpZCI6MX0.VjJrR5sy_Ddp7eHgp7WLOZu_Lqg8VZOjoy9oBg3J698"
        }
      })
    );
  }


    /**
   * 用户注销 
   * 用户注销退出系统
   * @param {any} req 
   * @param {any} res 
   * @memberof UserController
   */
  @Get('logout')
  public async logout(req, res) {
    res.status(HttpStatus.OK).json(
      MockTool.mock(null)
    );
  }

}