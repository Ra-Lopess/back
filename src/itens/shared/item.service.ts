import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItemDTO } from 'src/dto/ItemDTO';
import { ProdutoService } from 'src/produtos/shared/produto.service';
import { Item } from '.prisma/client';

@Injectable()
export class ItemService {
    constructor(
        private prisma: PrismaService,
        private produtoService: ProdutoService,
        ) { }

    async createItem(data): Promise<Item> {
        return this.prisma.item.create({
            data,
        });
    }

    async createItems(data: Array<any>): Promise<any> {
        return this.prisma.item.createMany({
            data,
            skipDuplicates:false
        });
    }

    

    async getItens(): Promise<Array<ItemDTO>> {
        const itens = await this.prisma.item.findMany();  
        let produtos = await this.produtoService.getProdutos();
        let itensDTO = [];

         itens.forEach( item => {
            
            let itemAux = new ItemDTO(item.id,item.idVenda,null, item.quantidade);

            itemAux.produto = produtos.filter(produto => produto.id === item.idProduto)[0];
        
            itensDTO.push(itemAux);
        })
    
        return itensDTO;
    }



}