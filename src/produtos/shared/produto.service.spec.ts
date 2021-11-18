import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoService } from './produto.service';

describe('ProdutoService', () => {
  let provider: ProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutoService],
    }).compile();

    provider = module.get<ProdutoService>(ProdutoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
