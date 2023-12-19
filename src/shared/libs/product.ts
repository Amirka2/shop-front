import {IChangeProduct, IProduct} from "@/entities";

export const createProductFromNullable = (product: IChangeProduct): IProduct => {
  let resultProduct: IProduct = {
    id: product.id,
    name: '',
    inStock: false,
    price: 0,
    subCategoryId: 0,
    shortDescription: '',
  };

  resultProduct = { ...resultProduct, ...product }

  return resultProduct;
}
