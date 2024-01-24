import {IChangeProduct, ICreatePhoto, IProduct} from "@/entities";

export const createProductFromNullable = (product: IChangeProduct, photos?: ICreatePhoto[]): IChangeProduct => {
  let resultProduct: IChangeProduct = {
    id: product.id,
    name: product.name || 'Имя продукта',
    inStock: product.inStock,
    price: product.price || -1,
    subCategoryId: product.subCategoryId || 1,
    shortDescription: product.shortDescription || 'Описание',
    productDescriptions: product.productDescriptions || [],
  };

  if (photos) {
    resultProduct = {
      ...resultProduct,
      photos,
    }
  }

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
    productDescriptions: product?.productDescriptions,
  }

  return newProduct
}

export const productFrontToBack = (
  product: IChangeProduct
) => {
  const newProduct: Omit<
    IChangeProduct & { isAvailable: boolean, subgroupId: number },
    "inStock" | "subCategoryId"
  > = {
    id: product.id,
    name: product?.name,
    subgroupId: product.subCategoryId,
    isAvailable: product.inStock,
    price: product?.price,
    shortDescription: product?.shortDescription,
    photos: product?.photos || [],
    productDescriptions: product?.productDescriptions || [],
  }

  return newProduct
}
