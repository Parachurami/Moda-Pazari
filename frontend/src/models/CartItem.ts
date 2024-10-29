import Product from "./Product";

class CartItem{
    id: number;
    product: Product;
    detail: { quauntity: number; color: String; };
    constructor(id: number, product: Product, detail: {quauntity:number, color: String}){
        this.id = id;
        this.product = product;
        this.detail = detail;
    }
}

export default CartItem;