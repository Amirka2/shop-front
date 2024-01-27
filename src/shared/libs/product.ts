import {IChangeProduct, IProduct} from "@/entities";

export const createProductFromNullable = (product: IChangeProduct): IProduct => {
  let resultProduct: IProduct = {
    id: product.id,
    name: product.name || 'Имя продукта',
    inStock: product.inStock,
    price: product.price || -1,
    subCategoryId: product.subCategoryId || 1,
    shortDescription: product.shortDescription || 'Описание',
  };

  return resultProduct;
}

export const productBackToFront = (
  product: Omit<
    IProduct & { isAvailable: boolean, subgroupId: number },
    "inStock" | "subCategoryId"
  >) => {
  const newProduct: IProduct = {
    id: product.id,
    name: product.name,
    subCategoryId: product.subgroupId,
    inStock: product.isAvailable,
    price: product.price,
    shortDescription: product.shortDescription,
    photos: product?.photos,
    description: product?.description,
  }

  return newProduct
}

export const productFrontToBack = (
  product: IProduct
) => {
  const newProduct: Omit<
    IProduct & { isAvailable: boolean, subgroupId: number },
    "inStock" | "subCategoryId"
  > = {
    id: product.id,
    name: product.name,
    subgroupId: product.subCategoryId,
    isAvailable: product.inStock,
    price: product.price,
    shortDescription: product.shortDescription,
    photos: product?.photos,
    description: product?.description,
  }

  return newProduct
}
