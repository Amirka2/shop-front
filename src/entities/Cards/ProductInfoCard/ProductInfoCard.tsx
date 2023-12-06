import React from 'react';

import {ProductCardInfo, Wrapper, NavLink} from "./ProductInfoCard.styles";

import {PhotoSlider} from "@/shared/components";

import type {IProduct} from "@/entities";

export const ProductInfoCard = (props: IProduct) => {
    return (
        <Wrapper>
            {props.photos && (
                <PhotoSlider photos={props.photos} width={200} height={150}/>
            )}
            <ProductCardInfo>
                <h3><NavLink to={props.name}>{props.name}</NavLink></h3>
                <span>В наличии: {props.inStock ? 'Да' : 'Нет'}</span>
                <span>Цена: {`${!props.isFixedPrice ? 'от' : ''} ${props.price} руб.`}</span>
            </ProductCardInfo>
        </Wrapper>
    );
};
