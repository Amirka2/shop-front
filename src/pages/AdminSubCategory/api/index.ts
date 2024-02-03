import {IManufacturer, IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS} from "@/shared/libs";

export const getSubCategoryProducts = async (subCategoryId: number) => {
  let products: IProduct[] = [];

  await apiFetch(`/constrspb/group/subgroup/${subCategoryId}/products`, {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      const backProducts = res.body.products;
      products = backProducts
        .map((p: { subgroupId: number; isAvailable: boolean; }) => ({
          ...p,
          subCategoryId,
          inStock: p.isAvailable,
          count: res.body.count,
        }));
    }
  })

  return products;
}

export const createProduct = async (token: string | undefined, product: Omit<IProduct, 'id'>) => {
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  await apiFetch('/constrspb/group/subgroup/product', {
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
  await apiFetch('/constrspb/group/subgroup/product/' + productId, {
    method: HTTP_METHODS.DELETE,
    headers: new Headers(headers)
  }).then(res => res && res.ok)
}

export const getCategoryById = async (id: number) => {
  const result = {
    name: ''
  };

  await apiFetch('/constrspb/group/' + id, {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      result.name = res.body.name;
    }
  })

  return result;
}

export const getSubCategoryById = async (id: number) => {
  const result = {
    name: ''
  };

  await apiFetch('/constrspb/group/subgroup/' + id, {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      result.name = res.body.name;
    }
  })

  return result;
}

export const getManufacturers = async () => {
  let manufacturers: IManufacturer[] = [];

  await apiFetch('/constrspb/manufacturer/', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      const body = res.body;

      manufacturers = body.manufacturers;

      return manufacturers
    }
  })

  return manufacturers;
}
