import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import {IManufacturer, IProduct} from "@/entities";

interface ManufacturerGroupModel {
  manufacturer: IManufacturer;
  products: IProduct[];
  count: number;
}

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

export const getProductsInSubCategory = async (subgroupId: number, manufacturerId: number) => {
  let products: IProduct[] = [];

  await apiFetch(`/constrspb/group/subgroup/${subgroupId}/products`, {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      products = getCurrentManufacturerProducts(res.body.manufacturerGroupModels, manufacturerId);
    }
  })

  return products;
}

const getCurrentManufacturerProducts = (m: ManufacturerGroupModel[], manufacturerId: number): IProduct[] => {
  return m.filter(m => m.manufacturer.id === manufacturerId)?.[0].products;
}
