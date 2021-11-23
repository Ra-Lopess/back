import { Global, Module } from '@nestjs/common';
import { VendasController } from './vendas.controller';
import { VendaService } from './shared/venda.service';
import { ClienteService } from 'src/clientes/shared/cliente.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ItemService } from 'src/itens/shared/item.service';

@Global()
@Module({
    controllers: [VendasController],
    providers: [ PrismaService, VendaService],
    exports:[VendaService]
})
export class VendasModule {}

