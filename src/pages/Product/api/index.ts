import {IProduct} from "@/entities";
import {apiFetch, HTTP_METHODS, productBackToFront} from "@/shared/libs";
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

  await apiFetch(URL + '/constrspb/group/subgroup/product/' + id + '/fullInfo', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      const backProduct = res.body.product;
      product = productBackToFront(backProduct);
    }
  })

  return product;
}
