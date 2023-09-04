import React from 'react';
import {Wrapper} from "./CatalogPage.styles";
import {ItemsGrid} from "@/shared/components";
import {products} from '@/app/shop/mock';
import {useMobileOrDesktop} from "@/shared/hooks";
import {ProductCard} from "@/widgets";

interface CatalogProps {
    itemsValue: number;
}

export const CatalogPage = (props: CatalogProps) => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = products.slice(0, props.itemsValue).map(i => <ProductCard {...i}/>);
    return (
        <Wrapper $isMobile={isMobile}>
            <h1>Каталог</h1>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
