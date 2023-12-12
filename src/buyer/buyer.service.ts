import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from 'src/logger/logger.service';
import { BuyerOrderDto } from './dto/buyer-order.dto';
import { BuyerRepository } from './buyer.repository';
import axios from 'axios';
@Injectable()
export class BuyerService {
  bot_token: string;
  chat_id: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly buyerRepository: BuyerRepository,
    private readonly loggerService: LoggerService,
  ) {
    this.bot_token = configService.get('BOT_TOKEN');
    this.chat_id = configService.get('CHAT_ID');
  }

  async createNewOrder(clientData): Promise<void> {
    try {
      const res = await this.buyerRepository.create(clientData);
      if (res) {
        this.loggerService.log(`[BuyerService]: you have new order`);
      }
    } catch (e) {
      this.loggerService.error(`[BuyerService]: ${e.message}`);
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
