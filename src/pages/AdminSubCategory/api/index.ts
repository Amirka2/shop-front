import {IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS} from "@/shared/libs";

const URL = 'http://194.58.111.33';

export const getSubCategoryProducts = async (subCategoryId: number)  => {
    console.log(subCategoryId);

    let products: IProduct[] = [];

    await apiFetch(URL + '/constrspb/group/subgroup/product', {
        method: HTTP_METHODS.GET,
    }).then(res => {
        if (res && res.ok) {
            const backProducts = res.body.products;
            products = backProducts
              .map((p: { subgroupId: number; isAvailable: boolean; }) => ({
                ...p,
                subCategoryId: p.subgroupId,
                inStock: p.isAvailable,
                  count: 0
            }));
        }
    })

    return products;
}

export const createProduct = async (token: string | undefined, product: Omit<IProduct, 'id'>) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    await apiFetch(URL + '/constrspb/group/subgroup/product', {
        method: HTTP_METHODS.POST,
        body: {
            ...product,
            subGroupId: product.subCategoryId,
            isAvailable: product.inStock
        },
        headers: new Headers(headers)
    }).then(res => res && res.ok)
}

export const deleteProduct = async (token: string | undefined, productId: number) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    await apiFetch(URL + '/constrspb/group/subgroup/product/' + productId, {
        method: HTTP_METHODS.DELETE,
        headers: new Headers(headers)
    }).then(res => res && res.ok)
}
