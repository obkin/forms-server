import { IsString, Length } from 'class-validator';

export class BuyerOrderDto {
  @IsString({ message: 'incorrect email' })
  name: string;

  @Length(10, 13, { message: 'incorrect phone number' })
  phone: string;
}
