import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router";
import { addProduct, getSubCategoryProducts } from "@/pages/AdminSubCategory/api";
import { AdminProductCard } from "@/shared/components";
import { Container } from '@/shared/ui';

import * as Styles from './SubCategories.styles';
import {Back, Plus} from "@/shared/ui";

import {Editor} from "./Editor";

export const SubCategory = () => {
    const navigate = useNavigate();
    const params = useParams();
    const subCategory = getSubCategoryProducts(Number(params.subCategoryId));
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setpProductDescription] = useState('');
    const [isEditorOpen, setEditorOpen] = useState(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value)
    }

    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductPrice(e.target.value)
    }

    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setpProductDescription(e.target.value)
    }

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
                <Styles.HeaderWrapper>
                    <Styles.BackButton onClick={() => navigate(-1)}>
                        <Back />
                    </Styles.BackButton>
                    <Styles.BreadCrumbs>
                        text/moretext
                    </Styles.BreadCrumbs>
                    <Styles.Placeholder />
                </Styles.HeaderWrapper>
                <Styles.AddButton onClick={() => setEditorOpen((prev) => !prev)}>
                    <Plus />
                </Styles.AddButton>
                {isEditorOpen && (
                    <Editor
                        placeholder={"input text"}
                        textarea={''}
                        handleNameChange={handleChangeName}
                        handlePriceChange={handleChangePrice}
                        handleDescriptionChange={handleChangeDescription}
                    />
                )}
                <Styles.ProductsWrapper>
                    {subCategory.products.map(product => <AdminProductCard product={product} />)}
                </Styles.ProductsWrapper>
            </Styles.Wrapper>
        </Container>
    );
};
