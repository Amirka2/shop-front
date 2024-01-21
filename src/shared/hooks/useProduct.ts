import {IProduct} from "@/entities";
import {useStores} from "@/shared/hooks/useStores";

export const useProduct = function(name: string | undefined): IProduct {
    const { productsStore } = useStores();
    const { products } = productsStore;

    if (!name) {
        return products[0];
    }

    const index = products.findIndex(p => p.name === name);

    return products[index];
}
