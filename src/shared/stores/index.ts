import { createContext } from "react";
import { CartStore } from "./cart";
import { AdminProduct } from './adminProduct';
import { CategoriesStore } from "@/shared/stores/categories";
import { SubCategoriesStore } from "@/shared/stores/subCategories";
import { ProductsStore } from "@/shared/stores/products";

export const rootStoreContext = createContext({
    cartStore: new CartStore(),
    adminProductStore: new AdminProduct(),
    categoriesStore: new CategoriesStore(),
    subCategoriesStore: new SubCategoriesStore(),
    productsStore: new ProductsStore(),
});
