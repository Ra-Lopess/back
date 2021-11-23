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
import { Item as item } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { ItemDTO } from 'src/dto/ItemDTO';

@Controller('itens')
export class ItensController {
    constructor(
        private readonly itemService: ItemService
      ) {}
    
      @Get()
      async getItens() : Promise<ItemDTO[]>{
        return this.itemService.getItens();
      }
    
      @Post('cadastroItem')
      async cadastroProduto(
        @Body() userData: {idVenda: number; idProduto: number; quantidade: number},
      ): Promise<item>{
        return this.itemService.createItem(userData);
      }
}
