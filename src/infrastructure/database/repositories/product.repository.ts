import { PrismaProvider } from '../providers/prisma.provider';
import { Injectable } from '@nestjs/common';

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
}
