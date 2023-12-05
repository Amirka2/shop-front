import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router";
import { addProduct, getSubCategoryProducts } from "@/pages/AdminSubCategory/api";
import { AdminHeader, AdminProductCard } from "@/shared/components";
import { Container } from '@/shared/ui';

import * as Styles from './SubCategories.styles';
import { Plus } from "@/shared/ui";
import {IProduct} from "@/entities";

export const SubCategory = () => {
    const navigate = useNavigate();
    const params = useParams();
    const subCategory = getSubCategoryProducts(Number(params.subCategoryId));
    const [isEditorOpen, setEditorOpen] = useState(false);

    const handleAddProduct = () => {
        let product: IProduct = {
            id: 0,
            subCategoryId: 0,
            price: 11111,
            name: 'MOCK',
            inStock: false,
            shortDescription: 'MOCK description',
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
