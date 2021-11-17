import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  public_Cliente,
  Prisma
} from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async createCliente(data): Promise<public_Cliente> {
    return this.prisma.public_Cliente.create({
      data,
    });
  }

  async getClientes(): Promise<public_Cliente[]> {
    return this.prisma.public_Cliente.findMany();
  }
}
