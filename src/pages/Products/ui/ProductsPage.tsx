import React from 'react';

import {Wrapper} from "./ProductsPage.styles";

import {ItemsGrid} from "@/shared/components";
import {products} from '@/app/shop/mock';
import {useMobileOrDesktop} from "@/shared/hooks";
import {ProductCard} from "@/widgets";
import {useParams} from "react-router";

export const ProductsPage = () => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    let itemsComponents = products.map(i => <ProductCard {...i}/>);

    const params = useParams();

    if (params.name === 'Химические реактивы для пленки') {
        itemsComponents = products.slice(0,2).map(i => <ProductCard {...i}/>);
    } else {
        itemsComponents = products.slice(2,4).map(i => <ProductCard {...i}/>);
    }

    return (
        <Wrapper $isMobile={isMobile}>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
