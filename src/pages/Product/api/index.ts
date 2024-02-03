import {IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS, productBackToFront} from "@/shared/libs";

export const getProductById = async (id: number) => {
  let product: IProduct = {
    id: id,
    subCategoryId: 0,
    price: 11111,
    name: 'MOCK',
    inStock: false,
    manufacturerId: 0,
    priority: 1,
    shortDescription: 'MOCK description',
    productDescriptions: [],
    photos: [],
  };

  await apiFetch('/constrspb/group/subgroup/product/' + id + '/fullInfo', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      const backProduct = res.body.product;
      product = productBackToFront(backProduct);
    }
  })

  return product;
}
