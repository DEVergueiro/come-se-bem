import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from '../../src/infrastructure/http/controllers/pedido.controller';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
