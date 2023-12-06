import React, {useEffect, useRef, useState} from 'react';
import { useNavigate, useParams } from "react-router";
import {addProduct, getSubCategoryProducts} from "@/pages/AdminSubCategory/api";
import { AdminHeader, AdminProductCard } from "@/shared/components";
import { Container } from '@/shared/ui';

import { Plus } from "@/shared/ui";
import {IProduct} from "@/entities";

import * as Styles from './SubCategories.styles';
import {useStores} from "@/shared/hooks";
import {observer} from "mobx-react";
import { Editor } from './Editor';

export interface SubCategoryPageProps {
    categoryName: string;
    subCategoryName: string;
    products: IProduct[];
}

export const SubCategory = observer(() => {
    const navigate = useNavigate();
    const params = useParams();
    const { productsStore } = useStores();

    const { products } = productsStore;

    let subCategory: SubCategoryPageProps = {
        categoryName: 'Category',
        subCategoryName: 'SubCategory',
        products: products.filter((p) => p.subCategoryId === Number(params.subCategoryId)),
    }

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

    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setProductShortDescription(e.target.value)
    }

    const handleAddProduct = () => {
        const product = {
            subCategoryId: Number(params.subCategoryId),
            inStock: true,
            price: Number(productPrice),
            name: productName,
            shortDescription: productShortDescription,
            photos: productPhoto,
        };
        addProduct(product);
    }

    const handleSave = () => {
        handleAddProduct();
        setEditorOpen(false);
    }

    const reloadRef = useRef(null);

    useEffect(() => {
        getSubCategoryProducts(Number(params.subCategoryId))
          .then(res => productsStore.set(res));
    }, []);

    useEffect(() => {
        console.log('rerendered');
    }, [reloadRef])

    return (
        <Container>
            <Styles.Wrapper>
                <AdminHeader title={'text/more'} />
                <Styles.AddButton onClick={() => setEditorOpen((prev) => !prev)}>
                    <Plus />
                </Styles.AddButton>
                {isEditorOpen && (
                  <Editor
                    handleNameChange={handleChangeName}
                    handlePriceChange={handleChangePrice}
                    handleDescriptionChange={handleChangeDescription}
                    handleSave={handleSave}
                    ref={reloadRef}
                  />
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
