import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';

import { ProdutoService } from './shared/produto.service';
import { Produto as produto } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';


@Controller('produtos')
export class ProdutosController {
    constructor(
        private readonly produtoService: ProdutoService
      ) {}
    
      @Get()
      async getProdutos() : Promise<produto[]>{
        return this.produtoService.getProdutos();
      }
    
      @Post('cadastroProduto')
      async cadastraProduto(
        @Body() userData: { nome?: string; valor: Decimal },
      ): Promise<produto> {
        return this.produtoService.createProduto(userData);
      }
}
