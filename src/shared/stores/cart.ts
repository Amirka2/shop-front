import { makeAutoObservable} from "mobx";
import {IProduct} from "@/entities";


export class CartStore {
    public cartProductsCounts: Map<IProduct, number> = new Map();

    constructor() {
        makeAutoObservable(this);
    }

    public increaseProductsCount = (product: IProduct) => {
        let prevCount = this.cartProductsCounts.get(product);

        if (this.cartProductsCounts.has(product) && prevCount) {
            this.cartProductsCounts.set(product, ++prevCount);
        } else {
            this.cartProductsCounts.set(product, 1);
        }
    }

    public decreaseProductsCount = (product: IProduct) => {
        let prevCount = this.cartProductsCounts.get(product);

        if (prevCount && prevCount < 2) {
            this.deleteProductFromCart(product);
        }

        if (this.cartProductsCounts.has(product) && prevCount) {
            this.cartProductsCounts.set(product, --prevCount);
        }
    }

    public deleteAllProducts = () => {
        this.cartProductsCounts.clear();
    }

    public deleteProductFromCart = (product: IProduct) => {
        this.cartProductsCounts.delete(product);
    };

    get getProductsCounts() {
        return this.cartProductsCounts;
    }

    public getProductCount(product: IProduct): number {
        return this.cartProductsCounts.get(product) || 0;
    }
}
