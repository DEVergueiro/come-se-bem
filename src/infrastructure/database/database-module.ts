import { Global, Module } from '@nestjs/common';

import { PrismaProvider } from './providers/prisma-provider';
import { OrderRepository } from './repositories/order-repository';
import { ProductRepository } from './repositories/product-repository';

// Esse decorator esta sendo usado para que tudo que ta
// aqui dentro possa ser usado em qualquer lugar
@Global()
@Module({
  providers: [PrismaProvider, OrderRepository, ProductRepository],
  exports: [PrismaProvider],
})
export class DatabaseModule {}
