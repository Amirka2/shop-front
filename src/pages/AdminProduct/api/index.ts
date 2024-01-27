import {IChangeProduct, ICreateDescriptionData, IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS, productBackToFront, productFrontToBack} from "@/shared/libs";
import {fetchBlobFromBackend} from "@/shared/libs/apiFetch";

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

    await apiFetch('/constrspb/group/subgroup/product/' + id + '/fullInfo/', {
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

    return await apiFetch('/constrspb/group/subgroup/product/' + product.id, {
        method: HTTP_METHODS.PUT,
        body: backProduct,
        headers: new Headers(headers)
    })
}

export const createPhoto = async (token: string | undefined, photo: { productId: number, link: string }) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return await apiFetch('/constrspb/group/subgroup/product/photo/', {
        method: HTTP_METHODS.POST,
        body: photo,
        headers: new Headers(headers),
    })
}

// TODO проверить, как будто не нужно
export const getPhoto = async (name: string) => {
    return await fetchBlobFromBackend(name);
}

export const deletePhoto = async (token: string | undefined, id: number) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    return await apiFetch('/constrspb/group/subgroup/product/photo/' + id, {
        method: HTTP_METHODS.DELETE,
        headers: new Headers(headers),
    })
}

export const createDescription = async (token: string | undefined, description: ICreateDescriptionData) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return await apiFetch('/constrspb/group/subgroup/product/productDescriptions/', {
        method: HTTP_METHODS.POST,
        body: description,
        headers: new Headers(headers),
    })
}

export const deleteDescription = async (token: string | undefined, descriptionId: number) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return await apiFetch('/constrspb/group/subgroup/product/productDescriptions/' + descriptionId, {
        method: HTTP_METHODS.DELETE,
        headers: new Headers(headers),
    })
}
