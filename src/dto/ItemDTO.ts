export class ItemDTO {



    id: Number;
    venda: any;
    produto: any;
    quantidade: Number;

    constructor(id:Number, venda:any, produto:any, quantidade:number) {
        this.id = id;
        this.venda = venda
        this.produto = produto
        this.quantidade = quantidade
    }

}