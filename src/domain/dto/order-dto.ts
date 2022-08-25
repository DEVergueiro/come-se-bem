import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  id?: string;

  @ApiProperty({
    description: 'Número do pedido: será gerado um número do pedido no front',
    example: 125,
  })
  order_number: number;

  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Carlos Alberto',
  })
  client: string;

  @ApiProperty({
    description: 'Valor total do pedido',
    example: 130,
  })
  amount?: number;

  @ApiProperty({
    description: 'Valor total pago em dinheiro pelo cliente',
    example: 150,
  })
  amount_paid?: number;

  @ApiProperty({
    description: 'Troco a ser dado ao cliente',
    example: 20,
  })
  change?: number;

  @ApiProperty({
    description:
      'Se o pedido já foi entregue ao cliente. "true" para sim e "false" para não',
    example: false,
  })
  delivered?: boolean;

  @ApiProperty({
    description: 'Observações inseridas no pedido pelo cliente',
    example: 'Sem cebola',
  })
  observation?: string;

  @ApiProperty({
    description:
      'Selecionar forma de pagamento. Opções disponíveis: credit, debit, cash, pix.',
    example: 'cash',
  })
  payment?: any;

  @ApiProperty({
    description: 'O front irá passar um objeto com os produtos selecionados',
  })
  products: any;
}
