import { ApiProperty } from '@nestjs/swagger';

export class ProductDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty({
    description: 'Name Product',
    example: 'Hotdog',
  })
  name: string;

  @ApiProperty({
    description: 'Product photo address.',
    example: 'http://www.come-se-bem.com/image/hotdog.jpg',
  })
  image: string;

  @ApiProperty({
    description: 'Product value.',
    example: 10,
  })
  value: number;

  @ApiProperty({
    description: 'Time it was created.',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Time it was updated.',
  })
  updatedAt: Date;
}
