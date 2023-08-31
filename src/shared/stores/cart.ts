import { makeAutoObservable} from "mobx";
import { toast } from "react-toastify";
import {IProduct} from "@/entities";


export class CartStore {
    public cartProductsList: IProduct[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public addProductToCart = (product: IProduct) => {
        if (!this.cartProductsList.find(p => p.id === product.id)) {
            console.log('success' + {product})
            this.cartProductsList.push(product);
        }
        toast.success("New Product added to cart", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    public deleteProductToCart = (id: number) => {
        this.cartProductsList = this.cartProductsList.filter(p => p.id !== id);
        toast.info("Product deleted from cart", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    get getProductsList() {
        return this.cartProductsList;
    }

}
