import { OrderDTO } from './../../../domain/dto/order.dto';
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

  async create(data: OrderDTO) {
    const order = await this.prisma.order.create({
      data,
    });

    return order;
  }
}
