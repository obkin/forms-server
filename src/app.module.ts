import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { BuyerModule } from './buyer/buyer.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, BuyerModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
