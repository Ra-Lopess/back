import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
} from '@nestjs/common';

import { VendaService } from './shared/venda.service';
import { ClienteService } from 'src/clientes/shared/cliente.service';
import { public_Venda as venda } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

@Controller('vendas')
export class VendasController {
    constructor(
        private readonly vendaService: VendaService,
        private readonly clienteService: ClienteService
    ) { }

    @Get()
    async getVendas(): Promise<venda[]> {
        return this.vendaService.getVendas();
    }

    @Get(':id')
    async getClienteById(@Param('id') id: number){
        return this.clienteService.getClienteById(id);
    }

    @Post('cadastroVenda')
    async cadastroVenda(
        @Body() userData: { idCliente: number },
    ): Promise<venda> {
        const dataCadastro = new Date();
        const venda = {
            "dataCadastro": dataCadastro,
            "idCliente": userData.idCliente,
            "frete": 10.00,
            "total": 10.00
        }
        return this.vendaService.createVenda(venda);
    }
}
