import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { BuyerOrderDto } from './buyer/dto/buyer-order.dto';

@Injectable()
export class AppService {
  bot_token: string;
  chat_id: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly loggerService: LoggerService,
  ) {
    this.bot_token = configService.get('BOT_TOKEN');
    this.chat_id = configService.get('CHAT_ID');
  }

  // database logic
  async createBuyer(buyerOrderDto: BuyerOrderDto): Promise<void> {
    try {
      // database request
      this.loggerService.log('new order created');
    } catch (e) {
      this.loggerService.error(`ERROR: ${e.message}`);
    }
  }

  async sendDataToBot(clientData: BuyerOrderDto): Promise<void> {
    const orderData = `
      <b>NEW ORDER:</b> %0A
      name: ${clientData.name}, %0A
      phone: ${clientData.phone}, %0A
      time: ${new Date().toLocaleString()}
    `;

    try {
      await axios.post(
        `https://api.telegram.org/bot${this.bot_token}/sendMessage?chat_id=${this.chat_id}&text=${orderData}&parse_mode=html`,
      );
      this.loggerService.log('[AppService]: user data sent to telegram');
    } catch (e) {
      this.loggerService.error('[AppService]: user data was not send to telegram: ', e.message);
    }
  }
}
