import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
    public_Produto,
    Prisma
} from '@prisma/client';

@Injectable()
export class ProdutoService {
    constructor(private prisma: PrismaService) { }

    async createProduto(data): Promise<public_Produto> {
        return this.prisma.public_Produto.create({
            data,
        });
    }

    async getProdutos(): Promise<public_Produto[]> {
        return this.prisma.public_Produto.findMany();
    }
}