import React from 'react';
import {Wrapper} from "./CatalogPage.styles";
import {ItemsGrid, Product} from "@/shared/components";
import {items} from '../mock';

interface ICatalogProps {
    itemsValue: number;
}

export const CatalogPage = () => {
    const itemsComponents = items.slice(0, 12).map(i => <Product {...i}/>);
    return (
        <Wrapper>
            <h1>Catalog Page</h1>
            <ItemsGrid height={350} width={1000}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
