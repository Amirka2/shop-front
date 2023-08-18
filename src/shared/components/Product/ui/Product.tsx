import React from 'react';
import {Wrapper} from "./Product.styles";

interface IProduct {
    id: number;
    price: number;
    inStock: boolean;
}
export const Product = (props: IProduct) => {
    return (
        <Wrapper>
            product
            <h4>{props.price}</h4>
            <h5>In Stock: {props.inStock ? 'Yes' : 'No'}</h5>
        </Wrapper>
    );
};
