import React from 'react';
import {Wrapper} from "./CatalogPage.styles";
import {ItemsGrid, Product} from "@/shared/components";
import {items} from '../mock';

export const CatalogPage = () => {
    const itemsComponents = items.map(i => <Product {...i}/>);
    return (
        <Wrapper>
            <h1>Catalog Page</h1>
            <ItemsGrid height={400} width={1000}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
