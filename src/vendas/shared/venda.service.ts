import { Venda } from '.prisma/client';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ClienteService } from 'src/clientes/shared/cliente.service';
import { ItemService } from 'src/itens/shared/item.service';
import { VendaDTO } from 'src/dto/VendaDTO';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VendaService {
    
    constructor(
        private prisma: PrismaService,
        private clienteService: ClienteService,
        //@Inject(forwardRef(() => ItemService ))
        //private itemService: ItemService
        ) { }

    async createVenda(data): Promise<Venda> {
        return this.prisma.venda.create({
            data,
        });
    }

    async getVendas(): Promise<Array<VendaDTO>> {
        const vendas = await this.prisma.venda.findMany();
        let clientes = await this.clienteService.getClientes();
        //let itens = await this.itemService.getItens();
        let vendasDTO = [];

        vendas.forEach( venda => {
            
            let vendaAux = new VendaDTO(venda.id, venda.dataCadastro,  null, venda.frete, venda.total);

            vendaAux.cliente = clientes.filter(cliente => cliente.id === venda.idCliente)[0];
            //vendaAux.item = itens.filter(item => item.id === venda.id)[0];
        
            vendasDTO.push(vendaAux);
        })
    
        return vendasDTO;
    }
    

}
