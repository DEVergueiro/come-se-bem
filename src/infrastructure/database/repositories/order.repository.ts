import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/infrastructure/database/providers/prisma.provider';

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaProvider) {}

  async findOne(id: string) {
    return this.prisma.order.findFirst({
      where: {
        id,
      },
    });
  }
}
