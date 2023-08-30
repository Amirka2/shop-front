import React from 'react';
import {Wrapper} from './ProductPage.styles';
import {IProduct} from "@/shared/components";

export const ProductPage = (props: IProduct) => {
    const {
        id,
        price,
        name,
        inStock,
        photos
    } = props;

    return (
        <Wrapper>
            id: {id}
            <br/>
            Price: {price}
            <br/>
            Name: {name}
            <br/>
            inStock: {inStock}
            <br/>
            photos: {photos}
        </Wrapper>
    );
};
