import { makeAutoObservable} from "mobx";
import { toast } from "react-toastify";
import {IProduct} from "@/shared/components";
import {items} from "@/pages/Catalog/mock";


export class CartStore {
    public cartProductsList: IProduct[] = items;

    constructor() {
        makeAutoObservable(this);
    }

    public addTodo = (product: IProduct) => {
        this.cartProductsList.push(product);
        toast.success("New Product added to cart", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    public deleteTodo = (id: number) => {
        const updatedCartProductsList = this.cartProductsList.filter(p => p.id !== id);
        this.cartProductsList = updatedCartProductsList;
        toast.info("Product deleted from cart", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    get getProductsList() {
        return this.cartProductsList;
    }

}
