import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';

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
  async sendDataToBot(data: string): Promise<void> {
    try {
      await axios.post(
        `https://api.telegram.org/bot${this.bot_token}/sendMessage?chat_id=${this.chat_id}&text=${data}`,
      );
      this.loggerService.log('[AppService]: user data sent to telegram');
    } catch (e) {
      this.loggerService.error('[AppService]: user data was not send to telegram: ', e.message);
    }
  }
}
