import { Injectable } from '@nestjs/common';
import { printer, types } from 'node-thermal-printer/node-thermal-printer';

import { OrderDTO } from '../../../domain/dto/order-dto';
import { PrismaProvider } from '../providers/prisma-provider';

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
    // I disabled eslint on that line because the constructor comes from the lowercase lib
    // eslint-disable-next-line new-cap
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
      select: {
        id: true,
        client: true,
      },
    });
  }

  async notDelivered() {
    return this.prisma.order.findMany({
      where: {
        delivered: false,
      },
      select: {
        id: true,
        client: true,
      },
    });
  }
}
