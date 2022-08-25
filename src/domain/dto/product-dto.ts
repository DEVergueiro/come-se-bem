import { ApiProperty } from '@nestjs/swagger';

export class ProductDTO {
  id?: string;

  @ApiProperty({
    description: 'Nome do produto',
    example: 'Hotdog',
  })
  name: string;

  @ApiProperty({
    description: 'Endereço da foto do produto',
    example: 'http://www.come-se-bem.com/image/hotdog.jpg',
  })
  image: string;

  @ApiProperty({
    description: 'Valor do produto',
    example: 10,
  })
  value: number;
}
