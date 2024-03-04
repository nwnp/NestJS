import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getNameByQueryString(@Query('name') name: string): string {
    return `${name} hello by QueryString`;
  }

  @Get('name/:name')
  getNameByParam(@Param('name') name: string): string {
    return `${name} hello by Param`;
  }
}
