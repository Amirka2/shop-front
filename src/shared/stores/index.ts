import { createContext } from "react";
import { CartStore } from "./cart";
import { AdminProduct } from './adminProduct';

export const rootStoreContext = createContext({
    cartStore: new CartStore(),
    adminProductStore: new AdminProduct(),
});
