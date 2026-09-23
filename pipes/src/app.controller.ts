import { Controller, Get, ParseUUIDPipe, ParseArrayPipe, Query, Param, Post, Body, Req } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post()
  // createMsg(@Body()msg:string){
  //   console.log(msg)
  //   return 'Message successfully received'
  // }

  // @Get('route1')
  // route1(){
  //   return{message: 'This is route1 for /client'}
  // }

  // @Get('route2')
  // route2(){
  //   return{message: 'This is route2 for /client'}
  // }

  // @Get('route2')
  // route2(@Req() req:Request){
  //   return{
  //     contentType: req.headers['content-type'],
  //     message: 'This is route2 for /client'
  //   }
  // }

  // @Get('route3')
  // route3(@Req() req:Request){
  //   return{
  //     contentType: req.headers['content-type'],
  //     message: 'This is route3 for /client'
  //   }
  // }

  // @Post('route4')
  // route4(@Req() req:Request){
  //   return{
  //     contentType: req.headers['content-type'],
  //     message: 'This is route4 for /client'
  //   }
  // }

  @Post()
  create(@Body() body:any){
    return body;
  }

  // @Get('client')
  // checkcontentType(){
  //   return {
  //     message: 'header received successfully'
  //   }
  // }

  // @Get()
  // getValue(@Query('isActive', ParseBoolPipe) isActive:Boolean){
  //   if (isActive) {
  //     return 'Welcome Admin'
  //   } else {
  //     return 'Welcome User'
  //   }
  // }

  // @Get()
  // getValue(@Query('num', new ParseArrayPipe({items:Number}))num:number[]){
  //   return num
  // }

  // @Get(':id')
  // getValue(@Param('id', ParseUUIDPipe)id:string){
  //   return `This is the returned ID: ${id}`
  // }

 
}
