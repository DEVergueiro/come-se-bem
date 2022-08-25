import { Module } from '@nestjs/common';

import { DatabaseModule } from './infrastructure/database/database-module';
import { DeliveredOrderController } from './infrastructure/http/controllers/delivered-order-controller';
import { OrderController } from './infrastructure/http/controllers/order-controller';
import { PrintOrderController } from './infrastructure/http/controllers/print-order-controller';
import { ProductController } from './infrastructure/http/controllers/product-controller';
import { AdminProductController } from './infrastructure/http/controllers/product-controller-admin';

@Module({
  imports: [DatabaseModule],
  controllers: [
    OrderController,
    ProductController,
    AdminProductController,
    DeliveredOrderController,
    PrintOrderController,
  ],
  providers: [DatabaseModule],
})
export class AppModule {}
