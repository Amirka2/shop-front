import {ICategory} from "@/entities";

export const CATEGORIES = [
    {
        title: 'category',
        subCategories: ['subCategory', 'subCategory'],
    },
    {
        title: 'category',
        subCategories: ['subCategory', 'subCategory'],
    },
    {
        title: 'category',
        subCategories: ['subCategory', 'subCategory'],
    },
];

interface CreateCategoryProps {
    title: string;
}
export const createCategory = ({title}: CreateCategoryProps): void => {
    console.log(title);
}
