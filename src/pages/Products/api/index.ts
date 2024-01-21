import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import { IProduct } from "@/entities";

export const getProducts = async () => {
  let products: IProduct[] = [];

  await apiFetch('/constrspb/group/subgroup/product', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      products = res.body.products;
    }
  })

  return products;
}

export const getProductsInSubCategory = async (subgroupId: number) => {
  let products: IProduct[] = [];

  await apiFetch(`/constrspb/group/subgroup/${subgroupId}/products`, {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      products = res.body.products;
    }
  })

  return products;
}
