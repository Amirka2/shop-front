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
    manufacturerId: product.manufacturerId || 0,
    priority: product?.priority || 1,
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
  product: any) => {
  const newProduct: IProduct = {
    id: product.id,
    name: product.name,
    subCategoryId: product.subgroupId,
    inStock: product.isAvailable,
    price: product.price,
    shortDescription: product.shortDescription,
    photos: product?.photos,
    productDescriptions: product?.productDescriptions,
    manufacturerId: product.manufacturerId || 0,
    priority: product.priority,
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
    manufacturerId: product.manufacturerId || 0,
    priority: product?.priority || 1,
  }

  return newProduct
}

export const getProductPrice = (inStock: boolean, price: number): string => {
  let text = '';
  
  if (!inStock) {
    if (price <= 0) {
      text += 'По запросу'
    } else {
      text += `От ${price}`
    }
  } else {
    text += price;
  }

  return text;
}
