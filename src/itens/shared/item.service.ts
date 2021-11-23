import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItemDTO } from 'src/dto/ItemDTO';
import { ProdutoService } from 'src/produtos/shared/produto.service';
import { VendaService } from 'src/vendas/shared/venda.service';
import { Item } from '.prisma/client';

@Injectable()
export class ItemService {
    constructor(
        private prisma: PrismaService,
        private produtoService: ProdutoService,
        private vendaService: VendaService
        ) { }

    async createItem(data): Promise<Item> {
        return this.prisma.item.create({
            data,
        });
    }

    async getItens(): Promise<Array<ItemDTO>> {
        const itens = await this.prisma.item.findMany();  
        let produtos = await this.produtoService.getProdutos();
        let vendas = await this.vendaService.getVendas();
        let itensDTO = [];

         itens.forEach( item => {
            
            let itemAux = new ItemDTO(item.id,null,null,item.quantidade);

            itemAux.produto = produtos.filter(produto => produto.id === item.idProduto)[0];
            itemAux.venda = vendas.filter(venda => venda.id === item.idVenda)[0];
        
            itensDTO.push(itemAux);
        })
    
        return itensDTO;
    }



}