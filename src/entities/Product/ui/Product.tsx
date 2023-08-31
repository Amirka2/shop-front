import React from 'react';
import {ProductInfo, Wrapper} from "./Product.styles";
import {PhotoSlider} from "@/shared/components";
import { Link } from 'react-router-dom';
import {IProduct} from "@/entities";

export const Product = (props: IProduct) => {
    return (
        <Wrapper>
            <PhotoSlider photos={props.photos} width={200} height={150}/>
            <ProductInfo>
                <h3><Link to={'/product/' + props.id}>{props.name}</Link></h3>
                <span>В наличии: {props.inStock ? 'Да' : 'Нет'}</span>
                <span>Цена: {props.price } руб.</span>
            </ProductInfo>
        </Wrapper>
    );
};
