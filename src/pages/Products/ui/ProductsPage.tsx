import React, {useEffect} from 'react';
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
    const { subCategoryId, manufacturerId } = useParams();

    const { products } = productsStore;
    let itemsComponents = products?.map(i => <ProductCard key={i.id} {...i}/>);

    useEffect(() => {
        const get = async () => await getProductsInSubCategory(Number(subCategoryId), Number(manufacturerId))

        const response = get();

        response.then(result => {
            const frontProducts = result?.map(p => {
                return productBackToFront(p)
            });
            const groupedProducts = frontProducts
              ?.filter(p => p.manufacturerId === Number(manufacturerId))

            productsStore.set(groupedProducts);
        })
    }, []);

    return (
        <MainLayout>
            <MainWrapper>
                <ItemsGrid style={{
                    justifyContent: 'center',
                }}>
                    {itemsComponents}
                </ItemsGrid>
            </MainWrapper>
        </MainLayout>
    );
});
