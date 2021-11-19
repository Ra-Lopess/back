import { Module } from '@nestjs/common';
import { VendasController } from './vendas.controller';
import { VendaService } from './shared/venda.service';
import { ClienteService } from 'src/clientes/shared/cliente.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [VendasController],
    providers: [PrismaClient, PrismaService, VendaService, ClienteService]
})
export class VendasModule {}

