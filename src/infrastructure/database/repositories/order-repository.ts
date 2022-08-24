import { Injectable } from '@nestjs/common';
import { PrinterTypes, ThermalPrinter } from 'node-thermal-printer/node-thermal-printer';
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
    return order;

    const printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: 'tcp://xxx.xxx.xxx.xxx',
    });
    printer.alignLeft();
    printer.setPrinterDriver(order);
    printer.cut();
  }

  async findDelivered() {
    return this.prisma.order.findMany({
      where: {
        delivered: true,
      },
    });
  }
}
