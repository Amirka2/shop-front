import React from 'react';
import {Wrapper} from "./CatalogPage.styles";
import {ItemsGrid, Product} from "@/shared/components";
import {items} from '../mock';
import {useMobileOrDesktop} from "@/shared/libs/hooks";

interface CatalogProps {
    itemsValue: number;
    isMobile: boolean;
}

export const CatalogPage = (props: CatalogProps) => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = items.slice(0, props.itemsValue).map(i => <Product {...i}/>);
    return (
        <Wrapper $isMobile={props.isMobile}>
            <h1>Catalog Page</h1>
            <ItemsGrid height={3000} width={width}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
