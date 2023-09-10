import React from 'react';

import {Wrapper} from "./CategoriesPage.styles";

import {ItemsGrid} from "@/shared/components";
import {categories} from '@/app/shop/mock';
import {useMobileOrDesktop} from "@/shared/hooks";
import {CategoryCard} from "@/entities";

export const CategoriesPage = () => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = categories.map(c => <CategoryCard {...c}/>);
    return (
        <Wrapper $isMobile={isMobile}>
            <h1>Категории</h1>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
