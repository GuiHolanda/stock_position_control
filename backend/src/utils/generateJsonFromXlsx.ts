import * as xlsx from 'xlsx';

export interface rawOrders {
  'Data do Negócio': string;
  'Tipo de Movimentação': string;
  Mercado: string;
  'Prazo/Vencimento': string;
  Instituição: string;
  'Código de Negociação': string;
  Quantidade: string;
  Preço: string;
  Valor: string;
}

export const excelToJson = (filePath: string): rawOrders[] => {
  const workbook = xlsx.readFile(
    `C:/projetos/personal/stock_position_control/backend/src/order/${filePath}`,
    { dateNF: 'dd/mm/yyyy' },
  );

  const ws = workbook.Sheets['Negociação'];

  const data: rawOrders[] = xlsx.utils.sheet_to_json(ws, { raw: false });

  return data;
};
