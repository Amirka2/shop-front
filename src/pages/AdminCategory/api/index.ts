import {ICategory} from "@/entities";

export const CATEGORIES = [
    {
        id: 0,
        title: 'category',
        subCategories: ['subCategory', 'subCategory'],
    },
    {
        id: 1,
        title: 'category',
        subCategories: ['subCategory', 'subCategory'],
    },
    {
        id: 2,
        title: 'category',
        subCategories: ['subCategory', 'subCategory'],
    },
];

interface CreateCategoryProps {
    title: string;
}

interface CreateSubCategoryProps {
    title: string;
    categoryId: number;
}

export const createCategory = ({title}: CreateCategoryProps): void => {
    console.log(title);
}

export const createSubCategory = ({title, categoryId}: CreateSubCategoryProps): void => {
    console.log(title, categoryId);
}
