import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
    public_Venda,
  Prisma
} from '@prisma/client';

@Injectable()
export class VendaService {
  constructor(private prisma: PrismaService) {}

  async createVenda(data): Promise<public_Venda> {
    return this.prisma.public_Venda.create({
      data,
    });
  }

  async getVendas(): Promise<public_Venda[]> {
    return this.prisma.public_Venda.findMany();
  }
}
