import { Global, Module } from '@nestjs/common';
import { ItensController } from './itens.controller';
import { ItemService } from './shared/item.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ProdutoService } from 'src/produtos/shared/produto.service';
import { VendaService } from 'src/vendas/shared/venda.service';
import { ClienteService } from 'src/clientes/shared/cliente.service';

@Global()
@Module({
    controllers: [ItensController],
    providers: [ PrismaService, ItemService],
    exports:[ItemService]
})
export class ItensModule {}
