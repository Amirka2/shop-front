import React from 'react';
import {Wrapper} from './ProductPage.styles';
import {IProduct} from "@/shared/components";
import { Slider } from './Slider';

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
            <Slider images={photos} />
        </Wrapper>
    );
};
