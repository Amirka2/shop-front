import React from 'react';
import {Wrapper} from './ProductPage.styles';
import * as Styled from './ProductInfo.styles';

interface ProductInfoProps{
    price: number;
    name: string;
    inStock: boolean;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({price, name, inStock}) => {
    return (
        <Wrapper>
            <div>
                <Styled.ProductName>{name}</Styled.ProductName>
                <Styled.ProductAvailability>В наличии: {inStock ? <Styled.YesText>ДА</Styled.YesText> : <Styled.NoText>Нет</Styled.NoText>}</Styled.ProductAvailability>
                <Styled.ProductPrice>{price} ₽</Styled.ProductPrice>
            </div>
        </Wrapper>
    );
}