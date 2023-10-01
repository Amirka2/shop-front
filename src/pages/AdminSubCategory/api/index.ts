export const SUB_CATEGORY =
{
    categoryTitle: 'Category',
    subCategoryTitle: 'subCategory',
    products:
        [
            {
                title: 'product 1',
                link: '/'
            },
            {
                title: 'product 2',
                link: '/'
            },
        ]
}

interface CreateSubCategoryProps {
    title: string;
}

export const createSubCategory = ({title}: CreateSubCategoryProps) => {
    console.log(title);
}
