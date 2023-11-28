import { IChangeProduct } from "@/entities/interfaces";
import { makeAutoObservable } from "mobx";

export class AdminProduct {
    public product: IChangeProduct | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    get () {
        return this.product;
    }

    public changeState(product: IChangeProduct) {
        this.product = product;
        console.log(this.product)
    }

    public clear() {
        this.product = undefined;
    }
}
