import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClienteService } from './shared/cliente.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [ClientesController],
    providers: [PrismaClient, ClienteService, PrismaService]
})
export class ClientesModule {}
