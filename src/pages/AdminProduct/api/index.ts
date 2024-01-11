import {IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS, productBackToFront, productFrontToBack} from "@/shared/libs";

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
            product = productBackToFront(backProduct);
        }
    })

    return product;
}

export const changeProduct = async (token: string | undefined, product: IProduct) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    const backProduct = productFrontToBack(product);

    return await apiFetch(URL + '/constrspb/group/subgroup/product/' + product.id, {
        method: HTTP_METHODS.PUT,
        body: backProduct,
        headers: new Headers(headers)
    })
}
