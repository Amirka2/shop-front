import { createContext } from "react";
import { CartStore } from "./cart";
import { AdminProduct } from './adminProduct';
import { CategoriesStore } from "./categories";
import { SubCategoriesStore } from "./subCategories";
import { ProductsStore } from "./products";
import { ProductDescriptions } from './productDescriptions';
import {SearchStore} from "@/shared/stores/search";

export const rootStoreContext = createContext({
    cartStore: new CartStore(),
    adminProductStore: new AdminProduct(),
    categoriesStore: new CategoriesStore(),
    subCategoriesStore: new SubCategoriesStore(),
    productsStore: new ProductsStore(),
    descriptionsStore: new ProductDescriptions(),
    searchStore: new SearchStore(),
});
