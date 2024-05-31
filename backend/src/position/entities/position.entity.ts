import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { OrderEntity } from '../../order/entities/order.entity';

@Entity({ name: 'positions' })
export class PositionEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'asset', nullable: false })
  asset: string;

  @Column({ name: 'type', nullable: false })
  type: 'compra' | 'venda';

  @Column({ name: 'market', nullable: false })
  market: string;

  @Column({ name: 'status', nullable: false })
  status: 'opened' | 'closed';

  @Column({ name: 'qtd', nullable: false })
  qtd: number;

  @Column({
    name: 'price',
    nullable: false,
    type: 'decimal',
    precision: 6,
    scale: 2,
  })
  price: number;

  @Column({
    name: 'value',
    nullable: false,
    type: 'decimal',
    precision: 6,
    scale: 2,
  })
  value: number;

  @CreateDateColumn({
    name: 'created_at',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    nullable: true,
  })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.positions)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;

  @OneToMany(() => OrderEntity, (order) => order.position)
  orders?: OrderEntity[];
}
