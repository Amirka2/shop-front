import {IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS} from "@/shared/libs";

const URL = 'http://194.58.111.33';

export const getProductById = async (id: number) => {
    let product: IProduct = {
        id: id,
        subCategoryId: 0,
        price: 11111,
        name: 'MOCK',
        inStock: false,
        shortDescription: 'MOCK description',
    };

    await apiFetch(URL + '/constrspb/group/subgroup/product/' + id, {
        method: HTTP_METHODS.GET,
    }).then(res => {
        if (res && res.ok) {
            const backProduct = res.body.product;
            product = {
                ...backProduct,
                subCategoryId: backProduct.subgroupId,
                inStock: backProduct.isAvailable,
            };
        }
    })

    return product;
}
