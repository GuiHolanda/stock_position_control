import { IsNumber, IsString } from 'class-validator';

export class CreateProfitOrLossDTO {
  @IsNumber()
  userId: number;

  @IsNumber()
  positionHistoryId: number;

  // @IsNumber()
  // orderId: number;

  @IsString()
  asset: string;

  @IsString()
  type: 'compra' | 'venda';

  @IsString()
  market: string;

  @IsNumber()
  qtd: number;

  @IsNumber()
  startPrice: number;

  @IsNumber()
  endPrice: number;

  @IsNumber()
  profitOrLoss: number;
}
