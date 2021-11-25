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
import { Venda as venda } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { VendaDTO } from 'src/dto/VendaDTO';
import { ItemDTO } from 'src/dto/ItemDTO';

@Controller('vendas')
export class VendasController {
    constructor(
        private readonly vendaService: VendaService,
        private readonly clienteService: ClienteService
    ) { }

    @Get()
    async getVendas(): Promise<VendaDTO[]> {
        return this.vendaService.getVendas();
    }

    @Get(':id')
    async getClienteById(@Param('id') id: number) {
        return this.clienteService.getClienteById(id);
    }

    @Post('cadastroVenda')
    async cadastroVenda(@Body() venda): Promise<venda> {

        venda.dataCadastro = new Date();
        return this.vendaService.createVenda(venda);
    }
}
