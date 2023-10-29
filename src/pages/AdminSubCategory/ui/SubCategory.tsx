import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router";
import { addProduct, getSubCategoryProducts } from "@/pages/AdminSubCategory/api";
import { AdminHeader, AdminProductCard } from "@/shared/components";
import { Container } from '@/shared/ui';

import * as Styles from './SubCategories.styles';
import { Plus } from "@/shared/ui";

export const SubCategory = () => {
    const navigate = useNavigate();
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
        <Container>
            <Styles.Wrapper>
                <AdminHeader title={'text/more'} />
                <Styles.AddButton onClick={() => setEditorOpen((prev) => !prev)}>
                    <Plus />
                </Styles.AddButton>
                {isEditorOpen && (
                    <div style={{ height: '100px', border: '5px solid red'}}>Editor</div>
                )}
                <Styles.ProductsWrapper>
                    {subCategory.products.map(product => <AdminProductCard product={product} />)}
                </Styles.ProductsWrapper>
            </Styles.Wrapper>
        </Container>
    );
};
