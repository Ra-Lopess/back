import { Module } from '@nestjs/common';
import { ItensController } from './itens.controller';
import { ItemService } from './shared/item.service';
import { PrismaClient } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [ItensController],
    providers: [PrismaClient, PrismaService, ItemService]
})
export class ItensModule {}
