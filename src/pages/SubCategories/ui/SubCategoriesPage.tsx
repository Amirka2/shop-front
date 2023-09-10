import React from 'react';

import {Wrapper} from "./SubCategoriesPage.styles";

import {ItemsGrid} from "@/shared/components";
import {subCategories} from '@/app/shop/mock';
import {useMobileOrDesktop} from "@/shared/hooks";
import {SubCategoryCard} from "@/entities";

export const SubCategoriesPage = () => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = subCategories.map(s => <SubCategoryCard {...s}/>);

    return (
        <Wrapper $isMobile={isMobile}>
            <h1>Подкатегории</h1>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
