import { Injectable } from '@nestjs/common';

import { ProductDTO } from '../../../domain/dto/product-dto';
import { PrismaProvider } from '../providers/prisma-provider';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaProvider) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findFirst({
      where: {
        id,
      },
    });
  }

  async findName(nameProduct: string) {
    return this.prisma.product.findMany({
      where: {
        name: nameProduct,
      },
    });
  }

  async findSix() {
    return this.prisma.product.findMany({
      include: {
        _count: {
          select: { orders: true },
        },
      },
      take: 6,
    });
  }

  async create(data: ProductDTO) {
    const product = await this.prisma.product.create({
      data,
    });

    return product;
  }
}
