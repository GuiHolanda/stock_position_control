export interface PositionHistory {
  userId: number;
  currentPositionId: number;
  asset: string;
  type: "compra" | "venda";
  market: string;
  qtd: number;
  price: number;
  value: number;
}
