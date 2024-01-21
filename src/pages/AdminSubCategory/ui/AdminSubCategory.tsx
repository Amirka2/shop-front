import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router";
import { observer } from "mobx-react";
import { useCookies } from "react-cookie";

import {createProduct, deleteProduct, getSubCategoryProducts} from "@/pages/AdminSubCategory/api";
import { AdminHeader, AdminProductCard } from "@/shared/components";
import { Container } from '@/shared/ui';
import { Plus } from "@/shared/ui";
import { IProduct } from "@/entities";
import { useStores } from "@/shared/hooks";

import { Editor } from './Editor';

import * as Styles from './AdminSubCategory.styles';

export interface SubCategoryPageProps {
    categoryName: string;
    subCategoryName: string;
    products: IProduct[];
}

export const AdminSubCategory = observer(() => {
    const params = useParams();
    const { productsStore } = useStores();
    const [cookies] = useCookies(['token']);

    const { products } = productsStore;
    const { token } = cookies;

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
    const [isLoading, setLoading] = useState(false);

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
        setLoading(true);

        const product = {
            subCategoryId: Number(params.subCategoryId),
            inStock: true,
            price: Number(productPrice),
            name: productName,
            shortDescription: productShortDescription,
            photos: productPhoto,
            productDescriptions: [],
        };
        createProduct(token, product)
          .then(() => setLoading(false));
    }

    const handleSave = () => {
        handleAddProduct();
        setEditorOpen(false);
    }

    const handleDeleteProduct = (id: number) => {
        setLoading(true);

        deleteProduct(token, id)
          .then(() => setLoading(false));
    }

    const reloadRef = useRef(null);

    useEffect(() => {
        getSubCategoryProducts(Number(params.subCategoryId))
          .then(res => productsStore.set(res));
    }, [isLoading])

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
                      subCategory.products.map(product => <AdminProductCard product={product} handleDelete={handleDeleteProduct}/>)}
                </Styles.ProductsWrapper>
            </Styles.Wrapper>
        </Container>
    );
});
