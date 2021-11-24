import { Decimal } from "@prisma/client/runtime";

export class VendaDTO{
    
    id: Number;
    dataCadastro: Date;
    cliente: any;
    frete: Decimal;
    total: Decimal;

    constructor(id:Number, dataCadastro:Date, cliente:any,  frete:Decimal, total: Decimal) {
        this.id = id;
        this.dataCadastro = dataCadastro;
        this.cliente = cliente;
        this.frete = frete;
        this.total = total;
    }
}