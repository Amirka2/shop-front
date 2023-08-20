import React from 'react';
import {Wrapper} from "./CatalogPage.styles";
import {ItemsGrid, Product} from "@/shared/components";
import {items} from '../mock';
import {useMobileOrDesktop} from "@/shared/libs/hooks/useMobileOrDesktop";

interface ICatalogProps {
    itemsValue: number;
}

export const CatalogPage = () => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = items.slice(0, 12).map(i => <Product {...i}/>);
    return (
        <Wrapper $isMobile={isMobile}>
            <h1>Catalog Page</h1>
            <ItemsGrid height={1000} width={width}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
