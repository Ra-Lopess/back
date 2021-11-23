import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutoService } from './shared/produto.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [ProdutosController],
    providers: [PrismaClient, PrismaService, ProdutoService]
})
export class ProdutosModule {}

