import { ApiProperty } from '@nestjs/swagger';

export class ProductDTO {
  @ApiProperty()
  id?: any;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  value: number;
}
