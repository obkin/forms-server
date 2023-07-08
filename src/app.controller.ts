import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('postdata')
  create(@Body() userData: { name: string; tel: string }) {
    console.log(`name: ${userData.name}, phone: ${userData.tel}`);
  }
}
