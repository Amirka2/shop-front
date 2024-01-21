import React, {useEffect} from 'react';
import {observer} from "mobx-react";

import {getProducts} from "@/pages/Products/api";
import { IContacts } from '@/entities';
import { ProductCard } from '@/widgets';

import {useMobileOrDesktop, useStores} from "@/shared/hooks";
import {Color} from "@/shared/constants";
import { MainLayout } from "@/shared/ui/Layouts";
import { ItemsGrid } from "@/shared/components";

import * as Styles from "./MainPage.styles";

interface MainPageProps extends IContacts {
    itemsValue: number;
}

export const MainPage = observer((props: MainPageProps) => {
    const { productsStore } = useStores();
    const { products } = productsStore;

    const isMobile = useMobileOrDesktop();
    const {
        itemsValue,
    } = props;
    let width = isMobile ? 600 : 1000;
    const itemsComponents = products
        .slice(0, itemsValue).map(i =>
            <ProductCard {...i}/>
        );

    useEffect(() => {
        const response = getProducts();
        response.then(result => {
            productsStore.set(result);
        })
    }, [])

    return (
        <MainLayout>
            <Styles.Wrapper $isMobile={isMobile}>
                <h1 style={{
                    marginBottom: '20px',
                    color: Color.blue
                }}>
                    Бестселлеры
                </h1>
                <ItemsGrid width={width.toString()}>
                    {itemsComponents}
                </ItemsGrid>
            </Styles.Wrapper>
        </MainLayout>
    );
});
