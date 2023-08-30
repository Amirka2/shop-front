import { createContext } from "react";
import { CartStore } from "./cart";

export const rootStoreContext = createContext({
    cartStore: new CartStore()
});
