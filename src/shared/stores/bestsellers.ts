import {makeAutoObservable} from "mobx";
import { IProduct } from "@/entities";

export class BestsellersStore {
    public bestsellers: IProduct[] = [];
    public products: IProduct[] = [];

    constructor(products: IProduct[]) {
        this.products = products;
        makeAutoObservable(this);
    }

    setAllProducts(products: IProduct[]) {
        this.products = products;
    }

    addBestseller(product: IProduct) {
        this.bestsellers.push(product);
    }

    deleteBestseller(id: number) {
        this.bestsellers = this.bestsellers.filter(p => p.id !== id);
    }

    set(products: IProduct[]) {
        this.bestsellers = products;
    }

    get() {
        return this.bestsellers;
    }
}