import { Test, TestingModule } from '@nestjs/testing';
import { PedidoService } from './order.service';

describe('PedidoService', () => {
  let service: PedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoService],
    }).compile();

    service = module.get<PedidoService>(PedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});