import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from './prisma.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ItensModule } from './itens/itens.module';
import { VendasModule } from './vendas/vendas.module';

@Module({
  imports: [ClientesModule, ProdutosModule, ItensModule, VendasModule],
  controllers: [AppController],
  providers: [AppService, PrismaClient, PrismaService],
})
export class AppModule {}
