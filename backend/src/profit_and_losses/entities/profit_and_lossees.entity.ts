import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { PositionHistoryEntity } from '../../position_history/entities/position_history.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'profits_and_losses' })
export class ProfitsAndLossesEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'position_history_id', nullable: false })
  positionHistoryId: number;

  // @Column({ name: 'order_id', nullable: false })
  // orderId: number;

  @Column({ name: 'asset', nullable: false })
  asset: string;

  @Column({ name: 'type', nullable: false })
  type: 'compra' | 'venda';

  @Column({ name: 'market', nullable: false })
  market: string;

  @Column({ name: 'qtd', nullable: false })
  qtd: number;

  @Column({
    name: 'start_price',
    nullable: false,
    type: 'decimal',
    precision: 6,
    scale: 2,
  })
  startPrice: number;

  @Column({
    name: 'end_price',
    nullable: false,
    type: 'decimal',
    precision: 6,
    scale: 2,
  })
  endPrice: number;

  @Column({
    name: 'profit_or_loss',
    nullable: false,
    type: 'decimal',
  })
  profitOrLoss: number;

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

  @OneToOne(
    () => PositionHistoryEntity,
    (position_history) => position_history.currentPosition,
  )
  position_history?: PositionHistoryEntity[];
}
