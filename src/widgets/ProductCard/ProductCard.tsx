import React from 'react';
import {IProduct, ProductInfoCard} from "@/entities";
import {AddToCartBtn} from "@/features";
import { Wrapper } from './ProductCard.styles';

export const ProductCard = (props: IProduct) => {
    return (
        <Wrapper>
            <ProductInfoCard {...props} />
            {/*<AddToCartBtn {...props} />*/}
        </Wrapper>
    );
};
