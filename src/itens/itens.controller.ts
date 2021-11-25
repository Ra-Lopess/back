import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';

import { ItemService } from './shared/item.service';
import { Item } from '@prisma/client';

@Controller('itens')
export class ItensController {
    constructor(
        private readonly itemService: ItemService
      ) {}
    
      @Get()
      async getItens() : Promise<Array<any>>{
        return this.itemService.getItens();
      }
    
      @Post('cadastroItem')
      async cadastroProduto(
        @Body() userData: {idVenda: number; idProduto: number; quantidade: number},
      ): Promise<Item>{
        return this.itemService.createItem(userData);
      }
}
