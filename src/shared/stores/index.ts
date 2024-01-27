import { createContext } from "react";
import { CartStore } from "./cart";
import { AdminProduct } from './adminProduct';
import { CategoriesStore } from "./categories";
import { SubCategoriesStore } from "./subCategories";
import { ProductsStore } from "./products";
import { ProductDescriptions } from './productDescriptions';

export const rootStoreContext = createContext({
    cartStore: new CartStore(),
    adminProductStore: new AdminProduct(),
    categoriesStore: new CategoriesStore(),
    subCategoriesStore: new SubCategoriesStore(),
    productsStore: new ProductsStore(),
    descriptionsStore: new ProductDescriptions(),
});
