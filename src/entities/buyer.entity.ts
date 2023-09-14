import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BuyerEntity {
  @PrimaryGeneratedColumn({ name: 'order_id' })
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;
}
