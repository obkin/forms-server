import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() userData: { name: string; tel: string }) {
    console.log(
      `name: ${userData.name}, phone: ${userData.tel},`,
      `time: ${new Date().toLocaleString()}`,
    );
  }
}
