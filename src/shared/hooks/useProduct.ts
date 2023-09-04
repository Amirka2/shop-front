import {products} from '@/app/shop/mock'
import {IProduct} from "@/entities";

export const useProduct = function(id: number | undefined): IProduct {
    if (!id) {
        return products[0]
    }

    const index = products.findIndex(p => p.id === id);

    return products[index];
}
