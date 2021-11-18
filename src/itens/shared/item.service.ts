import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
    public_Item,
    Prisma
} from '@prisma/client';

@Injectable()
export class ItemService {
    constructor(private prisma: PrismaService) { }

    async createItem(data): Promise<public_Item> {
        return this.prisma.public_Item.create({
            data,
        });
    }

    async getItens(): Promise<public_Item[]> {
        return this.prisma.public_Item.findMany();
    }
}
