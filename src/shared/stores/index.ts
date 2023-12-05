import { createContext } from "react";
import { CartStore } from "./cart";
import {CategoriesStore} from "@/shared/stores/categories";

export const rootStoreContext = createContext({
    cartStore: new CartStore(),
    categoriesStore: new CategoriesStore(),
});
