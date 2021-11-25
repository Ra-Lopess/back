import { Venda } from '.prisma/client';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ClienteService } from 'src/clientes/shared/cliente.service';
import { ItemService } from 'src/itens/shared/item.service';
import { VendaDTO } from 'src/dto/VendaDTO';
import { PrismaService } from 'src/prisma.service';
import { Decimal } from '@prisma/client/runtime';

@Injectable()
export class VendaService {

    constructor(
        private prisma: PrismaService,
        private clienteService: ClienteService,
        @Inject(forwardRef(() => ItemService))
        private itemService: ItemService
    ) { }

    async createVenda(data): Promise<any> {

        let vendaObj = new VendaDTO(null, data.dataCadastro, data.idCliente, null, data.frete, data.total)


        const venda = await this.prisma.venda.create({
            data: {
                dataCadastro: vendaObj.dataCadastro,
                idCliente: Number(vendaObj.cliente),
                frete: vendaObj.frete,
                total: 0
            }
        });


        vendaObj.id = venda.id

        data.itens.forEach(item => item.idVenda = venda.id)
        await this.itemService.createItems(data.itens);
        let itens = await this.itemService.getItens()

        let x = itens.filter(item => venda.id === item.venda)
        vendaObj.itens = x

        return vendaObj;


    }

    async getVendas(): Promise<Array<VendaDTO>> {
        const vendas = await this.prisma.venda.findMany();
        let clientes = await this.clienteService.getClientes();
        let itens = await this.itemService.getItens();
        let vendasDTO = [];

        vendas.forEach(venda => {

            let vendaAux = new VendaDTO(venda.id, venda.dataCadastro, null, null, venda.frete, venda.total);

            vendaAux.cliente = clientes.filter(cliente => cliente.id === venda.idCliente)[0];
            vendaAux.itens = itens.filter(item => venda.id === item.venda);

            let contaTotal = 0;
            vendaAux.itens.forEach(item => {
                contaTotal += item.produto.valor * item.quantidade
            });
            vendaAux.total = new Decimal(contaTotal);
            vendaAux.total = vendaAux.total.add(vendaAux.frete);

            vendasDTO.push(vendaAux);
        })

        return vendasDTO;
    }


}
