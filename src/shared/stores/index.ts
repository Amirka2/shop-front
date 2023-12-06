import { createContext } from "react";
import { CartStore } from "./cart";
import { AdminProduct } from './adminProduct';
import {Products} from "@/shared/stores/products";

export const rootStoreContext = createContext({
    cartStore: new CartStore(),
    adminProductStore: new AdminProduct(),
    productsStore: new Products(),
});
