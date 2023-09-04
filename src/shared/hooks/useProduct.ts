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
            '/photos/1.jpg',
            '/photos/2.jpg',
            '/photos/3.jpg',
            '/photos/4.jpg',
            '/photos/5.jpg',
        ],
        name: 'Agfa Structurix G 328',
        description: 'Agfa Structurix G 328 - однокомпонентный, жидкий фиксаж для ручной обработки промышленных рентгеновских пленок. Фиксаж G328 не содержит отвердитель.Фиксаж Agfa Structurix G328 поставляется в удобной канистре, изготовленной из полиэтилена, содержащей 5 л концентрата для приготовления 25 л готового раствора.',
        shortDescription: '',
        specifications: {
            type: "Фиксаж",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
    }
}
