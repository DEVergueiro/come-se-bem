import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  client: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  delivered: boolean;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;

}
