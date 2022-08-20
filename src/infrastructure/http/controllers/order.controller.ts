import { Controller } from '@nestjs/common';
import { OrderService } from '../../../pedido/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
}
