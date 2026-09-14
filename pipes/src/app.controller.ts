import { Controller, Get, ParseUUIDPipe, ParseArrayPipe, Query, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createMsg(@Body()msg:string){
    console.log(msg)
    return 'Message successfully received'
  }

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
