import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { PositionEntity } from '../../position/entities/position.entity';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'asset', nullable: false })
  asset: string;

  @Column({ name: 'type', nullable: false })
  type: string;

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

  @ManyToOne(() => UserEntity, (user) => user.orders)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: UserEntity;

  @ManyToOne(() => PositionEntity, (position) => position.orders)
  @JoinColumn({ name: 'position_id', referencedColumnName: 'id' })
  position?: PositionEntity;
}
