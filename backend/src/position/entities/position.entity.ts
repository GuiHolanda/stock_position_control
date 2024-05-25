import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { OrderEntity } from '../../order/entities/order.entity';

@Entity({ name: 'position' })
export class PositionEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'asset', nullable: false })
  asset: string;

  @Column({ name: 'type', nullable: false })
  type: string;

  @Column({ name: 'status', nullable: false })
  status: string;

  @Column({ name: 'qtd', nullable: false })
  qtd: number;

  @Column({ name: 'price', nullable: false })
  price: number;

  @Column({ name: 'value', nullable: false })
  value: number;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @UpdateDateColumn({ name: 'closed_at' })
  closedAt: Date;

  @OneToOne(() => UserEntity, (user) => user.position)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;

  @OneToMany(() => OrderEntity, (order) => order.position)
  orders?: OrderEntity[];
}
