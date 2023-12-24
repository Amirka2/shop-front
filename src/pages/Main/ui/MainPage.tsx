import React from 'react';

import { products } from "@/app/shop/mock";
import { ItemsGrid } from "@/shared/components";
import { IContacts } from '@/entities';
import { ProductCard } from '@/widgets';
import { useMobileOrDesktop } from "@/shared/hooks";

import { MainLayout } from "@/shared/ui/Layouts";

import * as Styles from "./MainPage.styles";
import {colors} from "@mui/material";
import {Color} from "@/shared/constants";

interface MainPageProps extends IContacts {
    itemsValue: number;
}

export const MainPage = (props: MainPageProps) => {
    const isMobile = useMobileOrDesktop();
    const {
        itemsValue,
    } = props;
    let width = isMobile ? 600 : 1000;
    const itemsComponents = products
        .slice(0, itemsValue).map(i =>
            <ProductCard {...i}/>
        );
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
};
