import React from 'react';
import {IProduct, Product} from "@/entities";
import {AddToCartBtn} from "@/features";
import { Wrapper } from './ProductCard.styles';

export const ProductCard = (props: IProduct) => {
    return (
        <Wrapper>
            <Product {...props} />
            <AddToCartBtn {...props} />
        </Wrapper>
    );
};
