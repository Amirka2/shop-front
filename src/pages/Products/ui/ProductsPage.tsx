import React, { useEffect } from 'react';
import { observer } from "mobx-react";
import { useParams } from "react-router";

import {ItemsGrid, MainWrapper} from "@/shared/components";
import { useStores } from "@/shared/hooks";
import { ProductCard } from "@/widgets";
import { MainLayout } from "@/shared/ui/Layouts";

import {getProductsInSubCategory} from "../api";
import {productBackToFront} from "@/shared/libs";

export const ProductsPage = observer(() => {
    const { productsStore } = useStores();
    const { subCategoryId } = useParams();

    const { products } = productsStore;
    let itemsComponents = products.map(i => <ProductCard key={i.id} {...i}/>);

    useEffect(() => {
        const response = getProductsInSubCategory(Number(subCategoryId))
        response.then(result => {
            const frontProducts = result.map(p => {
                return productBackToFront(p)
            });
            productsStore.set(frontProducts);
        })
    }, []);

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
