import { Module } from '@nestjs/common';
import { BuyerRepository } from './buyer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyerEntity } from 'src/entities/buyer.entity';
import { DatabaseModule } from 'src/database/database.module';
import { LoggerService } from 'src/logger/logger.service';
import { BuyerService } from './buyer.service';
import { BuyerController } from './buyer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BuyerEntity]), DatabaseModule],
  providers: [BuyerService, LoggerService, BuyerRepository],
  controllers: [BuyerController],
})
export class BuyerModule {}
