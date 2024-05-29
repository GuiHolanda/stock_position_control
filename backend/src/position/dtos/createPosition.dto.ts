import { IsNumber, IsString } from 'class-validator';

export class CreatePositionDTO {
  @IsString()
  asset: string;

  @IsString()
  type: string;

  @IsString()
  market: string;

  @IsNumber()
  qtd: number;

  @IsNumber()
  price: number;
}
