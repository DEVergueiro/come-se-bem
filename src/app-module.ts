import { Module } from '@nestjs/common';

import { AppController } from './app-controller';
import { AppService } from './app-service';
import { DatabaseModule } from './infrastructure/database/database-module';
import { OrderRepository } from './infrastructure/database/repositories/order-repository';
import { OrderController } from './infrastructure/http/controllers/order-controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderRepository],
})
export class AppModule {}
