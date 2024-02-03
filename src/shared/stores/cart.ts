import { makeAutoObservable } from "mobx";
import { IProduct } from "@/entities";

type ProductWithCount = IProduct & {
    count: number;
}

export class CartStore {
    public cartProductsCounts: Map<number, ProductWithCount> = new Map();

    constructor() {
        makeAutoObservable(this);
    }

    public increaseProductsCount = (product: IProduct) => {
        const id = product.id;

        if (!this.cartProductsCounts.has(id)) {
            const countedProduct: ProductWithCount = {
                ...product,
                count: 1,
            };
            this.cartProductsCounts.set(id, countedProduct);
        } else if (this.cartProductsCounts.has(id)) {
            this.cartProductsCounts.get(id)!.count++;
        }
    }

    public decreaseProductsCount = (product: IProduct) => {
        const id = product.id;

        if (this.cartProductsCounts.has(id) && this.cartProductsCounts.get(id)!.count === 1) {
            this.deleteProductFromCart(product);
        }

        if (this.cartProductsCounts.has(id) && this.cartProductsCounts.get(id)!.count > 1) {
            this.cartProductsCounts.get(id)!.count--;
        }
    }

    public deleteAllProducts = () => {
        this.cartProductsCounts.clear();
    }

    public deleteProductFromCart = (product: IProduct) => {
        this.cartProductsCounts.delete(product.id);
    };

    get getProductsFromCart(): ProductWithCount[] {
        return Array.from(this.cartProductsCounts.values());
    }

    public getProductCount(product: IProduct): number {
        return this.cartProductsCounts.get(product.id)?.count || 0;
    }
}
