import { PositionEntity } from '../../position/entities/position.entity';

export class PositionHistoryDTO {
  userId: number;
  currentPositionId: number;
  asset: string;
  type: 'compra' | 'venda';
  market: string;
  qtd: number;
  price: number;
  value: number;

  constructor(currentPosition: PositionEntity) {
    this.userId = currentPosition.userId;
    this.currentPositionId = currentPosition.id;
    this.asset = currentPosition.asset;
    this.type = currentPosition.type;
    this.market = currentPosition.market;
    this.qtd = currentPosition.qtd;
    this.price = currentPosition.price;
    this.value = currentPosition.value;
  }
}
