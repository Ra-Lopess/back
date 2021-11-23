import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';

import { ProdutoService } from 'src/produtos/shared/produto.service';
import { ItemService } from './shared/item.service';
import { public_Item as item } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

@Controller('itens')
export class ItensController {
    constructor(
        private readonly itemService: ItemService,
        private readonly produtoService: ProdutoService
      ) {}

      async preço(){
        return 
      }
    
      @Get()
      async getItens() : Promise<item[]>{
        return this.itemService.getItens();
      }
    
      @Post('cadastroItem')
      async cadastroProduto(
        @Body() userData: {idVenda: number; idProduto: number; quantidade: number},
      ): Promise<item>{
        return this.itemService.createItem(userData);
      }
}
