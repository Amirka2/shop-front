import { createContext } from "react";
import { CartStore } from "./cart";
import {CategoriesStore} from "@/shared/stores/categories";
import {SubCategoriesStore} from "@/shared/stores/subCategories";

export const rootStoreContext = createContext({
    cartStore: new CartStore(),
    categoriesStore: new CategoriesStore(),
    subCategoriesStore: new SubCategoriesStore(),
});
