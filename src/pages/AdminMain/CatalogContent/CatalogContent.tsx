import React from 'react';

interface CatalogContentProps {
    categories: {
        title: string,
        subCategories: string[],
    }[];
}

export const CatalogContent = ({categories}: CatalogContentProps) => {
    return (
        <>
            {categories.map(category => {
                return (
                    <>
                        <h1>{category.title}</h1>
                        <ul>
                            {category.subCategories.map(subCategory => <li>{subCategory}</li>)}
                        </ul>
                    </>
                )
            })}
        </>
    );
};
