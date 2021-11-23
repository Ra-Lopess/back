import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';

import { ClienteService } from './shared/cliente.service'
import { Cliente as cliente } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

@Controller('clientes')
export class ClientesController {
    constructor(
        private readonly clienteService: ClienteService,
      ) {}
    
      @Get()
      async getClientes() : Promise<cliente[]>{
        return this.clienteService.getClientes();
      }
    
      @Post('cadastroCliente')
      async cadastraClientes(
        @Body() userData: { nome?: string },
      ): Promise<cliente> {
        return this.clienteService.createCliente(userData);
      }
    
}
