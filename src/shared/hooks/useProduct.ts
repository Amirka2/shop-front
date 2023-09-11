import {products} from '@/app/shop/mock'
import {IProduct} from "@/entities";

export const useProduct = function(name: string | undefined): IProduct {
    if (!name) {
        return products[0];
    }

    const index = products.findIndex(p => p.name === name);

    return products[index];
}
