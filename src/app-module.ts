import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/infrastructure/database/repositories/product-repository';

import { AppController } from './app-controller';
import { AppService } from './app-service';
import { DatabaseModule } from './infrastructure/database/database-module';
import { OrderRepository } from './infrastructure/database/repositories/order-repository';
import { OrderController } from './infrastructure/http/controllers/order-controller';
import { ProductController } from './infrastructure/http/controllers/product-controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, OrderController, ProductController],
  providers: [AppService, OrderRepository, ProductRepository],
})
export class AppModule {}
