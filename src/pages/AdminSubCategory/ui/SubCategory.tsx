import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router";
import {addProduct, getSubCategoryProducts} from "@/pages/AdminSubCategory/api";
import { AdminHeader, AdminProductCard } from "@/shared/components";
import { Container } from '@/shared/ui';

import { Plus } from "@/shared/ui";
import {IProduct} from "@/entities";

import * as Styles from './SubCategories.styles';
import {useStores} from "@/shared/hooks";
import {observer} from "mobx-react";

export interface SubCategoryPageProps {
    categoryName: string;
    subCategoryName: string;
    products: IProduct[];
}

export const SubCategory = observer(() => {
    const navigate = useNavigate();
    const params = useParams();
    const [isEditorOpen, setEditorOpen] = useState(false);
    const { productsStore } = useStores();

    const { products } = productsStore;

    let subCategory: SubCategoryPageProps = {
        categoryName: 'Category',
        subCategoryName: 'SubCategory',
        products: products.filter((p) => p.subCategoryId === Number(params.subCategoryId))
        ,
    }

    useEffect(() => {
        getSubCategoryProducts(Number(params.subCategoryId))
          .then(res => productsStore.set(res));
    }, []);

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
                    {subCategory &&
                      subCategory.products &&
                      subCategory.products.map(product => <AdminProductCard product={product} />)}
                </Styles.ProductsWrapper>
            </Styles.Wrapper>
        </Container>
    );
});
