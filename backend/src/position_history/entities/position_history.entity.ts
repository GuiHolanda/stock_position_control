import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { OrderEntity } from '../../order/entities/order.entity';
import { PositionEntity } from '../../position/entities/position.entity';
import { ProfitsAndLossesEntity } from '../../profit_and_losses/entities/profit_and_lossees.entity';

@Entity({ name: 'position_history' })
export class PositionHistoryEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'current_position_id', nullable: false })
  currentPositionId: number;

  @Column({ name: 'asset', nullable: false })
  asset: string;

  @Column({ name: 'type', nullable: false })
  type: 'compra' | 'venda';

  @Column({ name: 'market', nullable: false })
  market: string;

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

  @ManyToOne(
    () => PositionEntity,
    (currentPosition) => currentPosition.position_history,
  )
  @JoinColumn({ name: 'current_position_id', referencedColumnName: 'id' })
  currentPosition?: PositionEntity;

  @OneToOne(() => ProfitsAndLossesEntity, (PL) => PL.position_history)
  profitsAndLosses?: ProfitsAndLossesEntity;

  @OneToMany(() => OrderEntity, (order) => order.position)
  orders?: OrderEntity[];
}
