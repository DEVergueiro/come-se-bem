import { Injectable } from '@nestjs/common';
import { printer, types } from 'node-thermal-printer/node-thermal-printer';
import { PrismaProvider } from 'src/infrastructure/database/providers/prisma-provider';

import { OrderDTO } from '../../../domain/dto/order-dto';

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

  async findAll() {
    return this.prisma.order.findMany();
  }

  async create(data: OrderDTO) {
    const order = await this.prisma.order.create({
      data,
    });
    return order;
  }

  async update(id: string, data: OrderDTO) {
    const orderExists = await this.prisma.order.findUnique({
      where: {
        id,
      },
    });

    if (!orderExists) {
      throw new Error('Order does not exists!');
    }

    return this.prisma.order.update({
      data,
      where: {
        id,
      },
    });
  }

  async printOrder(id: string) {
    const order = await this.prisma.order.findFirst({
      where: {
        id,
      },
    });

    const print = new printer({
      type: types.EPSON,
      interface: 'tcp://xxx.xxx.xxx.xxx',
    });
    print.alignLeft();
    print.setPrinterDriver(order);
    print.cut();
  }

  async delivered() {
    return this.prisma.order.findMany({
      where: {
        delivered: true,
      },
    });
  }

  async notDelivered() {
    return this.prisma.order.findMany({
      where: {
        delivered: false,
      },
    });
  }
}
