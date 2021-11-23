import { Decimal } from "@prisma/client/runtime";

export class VendaDTO{
    id: Number;
    dataCadastro: Date;
    cliente: any;
    item:any;
    frete: Decimal;
    total: Decimal;

    constructor(id:Number, dataCadastro:Date, cliente:any, item:any, frete:Decimal, total: Decimal) {
        this.id = id;
        this.dataCadastro = dataCadastro;
        this.cliente = cliente;
        this.item = item;
        this.frete = frete;
        this.total = total;
    }
}