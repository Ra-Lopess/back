import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteService } from './cliente.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from './prisma.service';
import { ProdutoService } from './produto.service';
import { ItemService } from './item.service';
import { VendaService } from './venda.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ClienteService, PrismaClient, PrismaService, ProdutoService, ItemService, VendaService],
})
export class AppModule {}
