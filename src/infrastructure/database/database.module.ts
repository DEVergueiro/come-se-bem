import { Global, Module } from '@nestjs/common';
import { PrismaProvider } from './providers/prisma.provider';
import { ProductRepository } from './repositories/product.repository';
import { OrderRepository } from './repositories/order.repository';

// Esse decorator esta sendo usado para que tudo que ta
// aqui dentro possa ser usado em qualquer lugar
@Global()
@Module({
  providers: [PrismaProvider, OrderRepository, ProductRepository],
  exports: [PrismaProvider],
})
export class DatabaseModule {}
