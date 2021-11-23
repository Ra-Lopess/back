import { Produto } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ProdutoService {
    constructor(private prisma: PrismaService) { }

    async createProduto(data): Promise<Produto> {
        return this.prisma.produto.create({
            data,
        });
    }

    async getProdutos(): Promise<Produto[]> {
        return this.prisma.produto.findMany();
    }

    async produtoById(id): Promise<Produto> {
        return this.prisma.produto.findUnique({
            where: { id: Number(id) } 
        });
    }
}