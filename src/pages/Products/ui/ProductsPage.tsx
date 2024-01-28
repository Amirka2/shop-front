import React, { useEffect } from 'react';
import { observer } from "mobx-react";
import { useParams } from "react-router";

import {ItemsGrid, MainWrapper} from "@/shared/components";
import { useStores } from "@/shared/hooks";
import { ProductCard } from "@/widgets";
import { MainLayout } from "@/shared/ui/Layouts";

import { getProductsInSubCategory } from "../api";

export const ProductsPage = observer(() => {
    const { productsStore } = useStores();
    const { subCategoryId } = useParams();

    const { products } = productsStore;
    let itemsComponents = products.map(i => <ProductCard key={i.id} {...i}/>);

    useEffect(() => {
        const response = getProductsInSubCategory(Number(subCategoryId));
        response.then(result => {
            productsStore.set(result);
        })
    }, [])

    return (
        <MainLayout>
            <MainWrapper>
                <ItemsGrid>
                    {itemsComponents}
                </ItemsGrid>
            </MainWrapper>
        </MainLayout>
    );
});
