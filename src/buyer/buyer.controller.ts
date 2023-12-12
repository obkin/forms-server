import { Body, Controller, Post } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { BuyerService } from './buyer.service';
import { BuyerOrderDto } from './dto/buyer-order.dto';

@Controller('buy')
export class BuyerController {
  constructor(
    private readonly buyerService: BuyerService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  async createOrder(@Body() clientData: BuyerOrderDto): Promise<void> {
    try {
      await this.buyerService.sendDataToBot(clientData);
      await this.buyerService.createNewOrder(clientData);
    } catch (e) {
      this.loggerService.error(`[BuyerController]: ${e.message}`);
    }
  }
}
