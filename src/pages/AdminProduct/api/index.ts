import {IChangeProduct, IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS, productBackToFront, productFrontToBack} from "@/shared/libs";
import {URL} from "@/shared/constants";

export const getProductById = async (id: number) => {
    let product: IProduct = {
        id: id,
        subCategoryId: 0,
        price: 11111,
        name: 'MOCK',
        inStock: false,
        shortDescription: 'MOCK description',
        productDescriptions: [],
        photos: [],
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

export const changeProduct = async (token: string | undefined, product: IChangeProduct) => {
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

export const createPhoto = async (token: string | undefined, photo: { productId: number, link: string }) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return await apiFetch(URL + '/constrspb/group/subgroup/product/photo/', {
        method: HTTP_METHODS.POST,
        body: photo,
        headers: new Headers(headers),
    })
}
