import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { PositionEntity } from '../../position/entities/position.entity';
import { OrderEntity } from '../../order/entities/order.entity';
import { ProfitsAndLossesEntity } from '../../profit_and_losses/entities/profit_and_lossees.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'role', nullable: false })
  role: 'admin' | 'user';

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => PositionEntity, (position) => position.userId)
  positions?: PositionEntity[];

  @OneToMany(() => ProfitsAndLossesEntity, (PL) => PL.userId)
  profitsAndLosses?: ProfitsAndLossesEntity[];

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders?: OrderEntity[];
}
