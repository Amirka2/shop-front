import React, { useEffect } from 'react';
import { observer } from "mobx-react";

import { ItemsGrid } from "@/shared/components";
import { useMobileOrDesktop, useStores } from "@/shared/hooks";
import { ProductCard } from "@/widgets";
import { MainLayout } from "@/shared/ui/Layouts";

import { getProducts } from "../api";

import * as Styles from "./ProductsPage.styles";

export const ProductsPage = observer(() => {
    const { productsStore } = useStores();
    let isMobile = useMobileOrDesktop();

    const { products } = productsStore;
    let width = isMobile ? 600 : 1000;
    let itemsComponents = products.map(i => <ProductCard key={i.id} {...i}/>);

    useEffect(() => {
        const response = getProducts();
        response.then(result => {
            productsStore.set(result);
        })
    }, [])

    return (
        <MainLayout>
            <Styles.Wrapper $isMobile={isMobile}>
                <ItemsGrid width={width.toString()}>
                    {itemsComponents}
                </ItemsGrid>
            </Styles.Wrapper>
        </MainLayout>
    );
});
