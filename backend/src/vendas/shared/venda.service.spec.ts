import { Test, TestingModule } from '@nestjs/testing';
import { VendaService } from './venda.service';

describe('VendaService', () => {
  let provider: VendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendaService],
    }).compile();

    provider = module.get<VendaService>(VendaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
