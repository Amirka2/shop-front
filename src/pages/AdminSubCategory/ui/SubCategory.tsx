import React, {useState} from 'react';
import {useParams} from "react-router";
import {addProduct, getSubCategoryProducts} from "@/pages/AdminSubCategory/api";
import {AdminProductCard} from "@/shared/components";

import * as Styles from './SubCategories.styles';
import {Plus} from "@/shared/ui";

export const SubCategory = () => {
    const params = useParams();
    const subCategory = getSubCategoryProducts(Number(params.subCategoryId));
    const [isEditorOpen, setEditorOpen] = useState(false);

    const handleAddProduct = () => {
        const product = {
            price: 1,
            name: '',
            inStock: false,
            description: {
                text: '',
                tableText: [''],
            },
            shortDescription: 'string',
            photos: [''],
        };
        addProduct(product);
    }

    return (
        <div>
            Admin sub category
            <Styles.AddButton onClick={() => setEditorOpen((prev) => !prev)}>
                <Plus />
            </Styles.AddButton>
            {isEditorOpen && (
                <div style={{ height: '100px', border: '5px solid red'}}>Editor</div>
            )}
            <Styles.ProductsWrapper>
                {subCategory.products.map(product => <AdminProductCard product={product} />)}
            </Styles.ProductsWrapper>
        </div>
    );
};
