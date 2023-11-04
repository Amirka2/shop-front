import { ICreateProduct, IProduct } from '@/entities';
import { products } from '@/app/shop/mock';

interface SubCategoryPageProps {
    categoryName: string;
    subCategoryName: string;
    products: IProduct[];
}

export const getSubCategoryProducts = (subCategoryId: number): SubCategoryPageProps  => {
    console.log(subCategoryId);

    return {
        categoryName: 'Category',
        subCategoryName: 'SubCategory',
        products,
    }
}

export const addProduct = (product: Omit<ICreateProduct, 'id'>) => {
    console.log(product);
}
