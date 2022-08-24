import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { DatabaseModule } from './infrastructure/database/database-module';
import { OrderRepository } from './infrastructure/database/repositories/order-repository';
import { DeliveredOrderController } from './infrastructure/http/controllers/delivered-order-controller';
import { OrderController } from './infrastructure/http/controllers/order-controller';
import { ProductController } from './infrastructure/http/controllers/product-controller';
import { AdminProductController } from './infrastructure/http/controllers/product-controller-admin';

@Module({
  imports: [DatabaseModule],
  controllers: [
    OrderController,
    ProductController,
    AdminProductController,
    DeliveredOrderController,
  ],
  providers: [OrderRepository, ProductRepository],
})
export class AppModule {}
