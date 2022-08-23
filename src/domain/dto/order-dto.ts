import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  id?: any;

  @ApiProperty({
    description: 'blablabla',
    example: 'blabla',
  })
  client: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  amount_paid: number;

  @ApiProperty()
  change: number;

  @ApiProperty()
  delivered: boolean;

  @ApiProperty()
  observation: string;

  @ApiProperty()
  payment: any;

  createdAt: string;

  updatedAt: string;
}
