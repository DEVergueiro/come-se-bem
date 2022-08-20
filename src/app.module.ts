import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModule } from './pedido/module/module.module';
import { PedidoModule } from './pedido/order.module';
import { ProductModule } from './product/product.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/order.module';

@Module({
  imports: [ModuleModule, PedidoModule, ProdutoModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
