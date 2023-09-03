import {products} from '@/app/shop/mock'
import {IProduct} from "@/entities";

export const useProduct = function(id: number): IProduct {
    //TODO: Сделать поиск товара из данных

    if (!products.find(p => p.id === id) && products[0]) {
        return products[0];
    }
    return {
        id: 0,
        price: 28,
        inStock: true,
        photos: [
            'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
            'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
        ],
        name: 'Product name',
    }
}
