import { Cliente } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class ClienteService {
    constructor(private prisma: PrismaService) { }

    async createCliente(data): Promise<Cliente> {
        return this.prisma.cliente.create({
            data,
        });
    }

    async getClientes(): Promise<Cliente[]> {
        return this.prisma.cliente.findMany();
    }

    async getClienteById(id: number) {
        return this.prisma.cliente.findUnique({
            where: {
              id: Number(id),
            },
            select:{
                nome: true,
            },
        });
    }
}
