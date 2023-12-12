import { Injectable } from '@nestjs/common';
import { BuyerOrderDto } from './dto/buyer-order.dto';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class BuyerRepository {
  constructor(private readonly loggerService: LoggerService) {}

  async createBuyer(buyerOrderDto: BuyerOrderDto): Promise<void> {
    try {
      // database request
      this.loggerService.log('new order created');
    } catch (e) {
      this.loggerService.error(`ERROR: ${e.message}`);
    }
  }
}
