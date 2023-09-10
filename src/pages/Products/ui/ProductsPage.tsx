import React from 'react';

import {Wrapper} from "./ProductsPage.styles";

import {ItemsGrid} from "@/shared/components";
import {products} from '@/app/shop/mock';
import {useMobileOrDesktop} from "@/shared/hooks";
import {ProductCard} from "@/widgets";

export const ProductsPage = () => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = products.map(i => <ProductCard {...i}/>);

    return (
        <Wrapper $isMobile={isMobile}>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
