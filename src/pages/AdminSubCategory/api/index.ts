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
            }));
        }
    })

    return products;
}

export const addProduct = (product: Omit<IProduct, 'id'>) => {
    console.log(product);
}
