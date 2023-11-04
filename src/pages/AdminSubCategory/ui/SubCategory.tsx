import React, { useState, useRef, useEffect} from 'react';
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
    const [productShortDescription, setProductShortDescription] = useState('');
    const [productPhoto, setProductPhoto] = useState([]);
    const [isEditorOpen, setEditorOpen] = useState(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value)
    }

    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductPrice(e.target.value)
    }

    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductShortDescription(e.target.value)
    }

    const handleAddProduct = () => {
        const product = {
            price: Number(productPrice), 
            name: productName,
            shortDescription: productShortDescription,
            photos: productPhoto,
        };
        addProduct(product);
        console.log(product)
    }

    const handleSave = () => {
        handleAddProduct();
        console.log(productPrice);
        console.log(productName);
        console.log(productShortDescription);
        setEditorOpen(false);
    }

    const reloadRef = useRef(null);
    useEffect(() => {
        console.log('rerendered');
    }, [reloadRef])

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
                        placeholder={""}
                        textarea={""}
                        handleNameChange={handleChangeName}
                        handlePriceChange={handleChangePrice}
                        handleDescriptionChange={handleChangeDescription}
                        handleSave={handleSave}
                        ref={reloadRef}
                    />
                )}
                <Styles.ProductsWrapper>
                    {subCategory.products.map(product => <AdminProductCard product={product} />)}
                </Styles.ProductsWrapper>
            </Styles.Wrapper>
        </Container>
    );
};
