import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ProdutoService } from './produto.service';
import { ItemService } from './item.service';
import { VendaService } from './venda.service';
import { public_Cliente as cliente, public_Produto as produto, public_Item as item, public_Venda as venda } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

@Controller()
export class AppController {
  constructor(
    private readonly clienteService: ClienteService,
    private readonly produtoService: ProdutoService,
    private readonly itemService: ItemService,
    private readonly vendaService: VendaService
  ) {}

  @Get('clientes')
  async getClientes() : Promise<cliente[]>{
    return this.clienteService.getClientes();
  }

  @Post('cadastroCliente')
  async cadastraClientes(
    @Body() userData: { nome?: string },
  ): Promise<cliente> {
    return this.clienteService.createCliente(userData);
  }

  @Get('produtos')
  async getProdutos() : Promise<produto[]>{
    return this.produtoService.getProdutos();
  }

  @Post('cadastroProduto')
  async cadastraProduto(
    @Body() userData: { nome?: string; valor: Decimal },
  ): Promise<cliente> {
    return this.produtoService.createProduto(userData);
  }

  @Get('itens')
  async getItens() : Promise<item[]>{
    return this.itemService.getItens();
  }

  @Post('cadastroItem')
  async cadastroProduto(
    @Body() userData: {idVenda: number; idProduto: number; quantidade: number},
  ): Promise<item>{
    return this.itemService.createItem(userData);
  }

  @Get('vendas')
  async getVendas() : Promise<venda[]>{
    return this.vendaService.getVendas();
  }

  @Post('cadastroVenda')
  async cadastroVenda(
    @Body() userData: {idCliente: number},
  ): Promise<venda>{
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