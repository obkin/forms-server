import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BuyerOrderDto } from './buyer/dto/buyer-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() clientData: BuyerOrderDto): void {
    this.appService.sendDataToBot(clientData);
    this.appService.createBuyer(clientData);

    // console.log(
    // 	`name: ${userData.name}, phone: ${userData.tel},`,
    // 	`time: ${new Date().toLocaleString()}`,
    // );
  }
}
