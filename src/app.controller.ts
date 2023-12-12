import { Body, Controller, Post } from '@nestjs/common';
import { BuyerOrderDto } from './buyer/dto/buyer-order.dto';
import { BuyerService } from './buyer/buyer.service';

@Controller()
export class AppController {
  constructor(private readonly buyerService: BuyerService) {}

  @Post()
  create(@Body() clientData: BuyerOrderDto): void {
    this.buyerService.sendDataToBot(clientData);

    // console.log(
    // 	`name: ${userData.name}, phone: ${userData.tel},`,
    // 	`time: ${new Date().toLocaleString()}`,
    // );
  }
}
