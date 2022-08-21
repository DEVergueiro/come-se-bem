import { ApiProperty } from '@nestjs/swagger';

export class ProductDTO {
  @ApiProperty()
  id?: any;
  @ApiProperty()
  name: string;
  @ApiProperty()
  value: number;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;

}