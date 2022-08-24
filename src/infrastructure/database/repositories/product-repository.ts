import { Injectable } from '@nestjs/common';

import { ProductDTO } from '../../../domain/dto/product-dto';
import { PrismaProvider } from '../providers/prisma-provider';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaProvider) {}

  async findOne(id: string) {
    return this.prisma.product.findFirst({
      where: {
        id,
      },
    });
  }

  async findFirst(name: string) {
    return this.prisma.product.findFirst({
      where: {
        name,
      },
    });
  }

  async create(data: ProductDTO) {
    const product = await this.prisma.product.create({
      data,
    });

    return product;
  }
}
