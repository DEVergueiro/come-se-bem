import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty({
    description:
      'Order number: an order number will be generated in the frontend.',
    example: 125,
  })
  order_number: number;

  @ApiProperty({
    description: 'Client Name',
    example: 'Carlos Alberto',
  })
  client: string;

  @ApiProperty({
    description: 'Total order amount.',
    example: 130,
  })
  amount?: number;

  @ApiProperty({
    description: 'Total amount paid in cash by the customer.',
    example: 150,
  })
  amount_paid?: number;

  @ApiProperty({
    description: 'Change to be given to the customer.',
    example: 20,
  })
  change?: number;

  @ApiProperty({
    description:
      'If the order has already been delivered to the customer. "true" for yes and "false" for no.',
    example: false,
  })
  delivered?: boolean;

  @ApiProperty({
    description: 'Remarks entered in the order by the customer.',
    example: 'take onion',
  })
  observation?: string;

  @ApiProperty({
    description:
      'Select payment method. Available options:credit, debit, cash, pix.',
    example: 'cash',
  })
  payment?: any;

  @ApiProperty({
    description: 'The frontend will pass an object with the selected products.',
  })
  products: any;

  @ApiProperty({
    description: 'Time it was created.',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Time it was updated',
  })
  updatedAt: Date;
}
