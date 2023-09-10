import React from 'react';
import { Link } from 'react-router-dom';

import {ProductCardInfo, Wrapper} from "./ProductInfoCard.styles";

import {PhotoSlider} from "@/shared/components";

import type {IProduct} from "@/entities";

export const ProductInfoCard = (props: IProduct) => {
    return (
        <Wrapper>
            <PhotoSlider photos={props.photos} width={200} height={150}/>
            <ProductCardInfo>
                <h3><Link to={props.name}>{props.name}</Link></h3>
                <span>В наличии: {props.inStock ? 'Да' : 'Нет'}</span>
                <span>Цена: {props.price } руб.</span>
            </ProductCardInfo>
        </Wrapper>
    );
};
