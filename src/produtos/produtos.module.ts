import { Global, Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutoService } from './shared/produto.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ClienteService } from 'src/clientes/shared/cliente.service';
import { ItemService } from 'src/itens/shared/item.service';

@Global()
@Module({
    controllers: [ProdutosController],
    providers: [ PrismaService, ProdutoService],
    exports: [ProdutoService]
})
export class ProdutosModule {}

