import React from 'react';
import {ProductInfo, Wrapper} from "./Product.styles";
import {PhotoSlider, AddToCartBtn} from "@/shared/components";

interface IProduct {
    id: number;
    price: number;
    name: string;
    inStock: boolean;
    photos: Array<string>;
}
export const Product = (props: IProduct) => {
    return (
        <Wrapper>
            <PhotoSlider photos={props.photos} width={200} height={150}/>
            <ProductInfo>
                <h3>{props.name}</h3>
                <span>В наличии: {props.inStock ? 'Да' : 'Нет'}</span>
                <span>Цена: {props.price } руб.</span>
                <AddToCartBtn/>
            </ProductInfo>
        </Wrapper>
    );
};
