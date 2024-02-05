import {groupBy} from "lodash";

import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import {IManufacturer, IProduct} from "@/entities";

export const getManufacturers = async () => {
  let manufacturers: IManufacturer[] = [];

  await apiFetch('/constrspb/manufacturer', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      manufacturers = res.body.manufacturers;
    }
  })

  return manufacturers;
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

export const getManufacturersPhotos = (products: IProduct[]): string[] => {
  const manufacturersIds = new Set<number>();

  products.forEach(p => {
    manufacturersIds.add(p.manufacturerId);
  })

  const groupedProducts = groupBy(products, 'manufacturerId');

  const photos: string[] = [];

  manufacturersIds.forEach(mId => {
    photos.push(groupedProducts?.[mId]?.[0]?.photos?.[0].link);
  })

  return photos;
}
