import { Injectable } from '@nestjs/common';
import { BuyerOrderDto } from './dto/buyer-order.dto';
import { LoggerService } from 'src/logger/logger.service';
import { InjectRepository } from '@nestjs/typeorm';
import { BuyerEntity } from 'src/entities/buyer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BuyerRepository {
  constructor(
    @InjectRepository(BuyerEntity) private readonly urlRepository: Repository<BuyerEntity>,
  ) {}

  async create(buyerOrderDto: BuyerOrderDto): Promise<BuyerEntity> {
    return await this.urlRepository.save({
      name: buyerOrderDto.name,
      phone: buyerOrderDto.phone,
    });
  }
}
