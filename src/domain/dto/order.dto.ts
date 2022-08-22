import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  @ApiProperty()
  id?: any;
  @ApiProperty()
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
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;

}
