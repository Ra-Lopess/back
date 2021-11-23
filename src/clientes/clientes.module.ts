import { Global, Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClienteService } from './shared/cliente.service';
import { PrismaService } from 'src/prisma.service';
import { ItemService } from 'src/itens/shared/item.service';
import { ProdutoService } from 'src/produtos/shared/produto.service';
import { VendaService } from 'src/vendas/shared/venda.service';
import { ItensModule } from 'src/itens/itens.module';

@Global()
@Module({
    controllers: [ClientesController],
    providers: [ClienteService, PrismaService],
    exports:[ClienteService]
})
export class ClientesModule {}
