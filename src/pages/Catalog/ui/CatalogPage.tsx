import React from 'react';
import {Wrapper} from "./CatalogPage.styles";
import {ItemsGrid} from "@/shared/components";
import {Product} from '@/entities';
import {products} from '@/app/shop/mock';
import {useMobileOrDesktop} from "@/shared/hooks";

interface CatalogProps {
    itemsValue: number;
}

export const CatalogPage = (props: CatalogProps) => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = products.slice(0, props.itemsValue).map(i => <Product {...i}/>);
    return (
        <Wrapper $isMobile={isMobile}>
            <h1>Catalog Page</h1>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
