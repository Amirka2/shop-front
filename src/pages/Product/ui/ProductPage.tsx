import React from 'react';
import {Wrapper} from './ProductPage.styles';
import {IProduct} from "@/shared/components";
import { Slider } from './Slider';
import { ProductInfo } from './ProductInfo';
import { ProductCharacteristic } from './ProductCharacteristic';

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
                <ProductInfo price={price} name={name} inStock={inStock}></ProductInfo>
                <ProductCharacteristic></ProductCharacteristic>
        </Wrapper>
    );
};
