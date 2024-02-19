import React from 'react';
import {Link} from "react-router-dom";

import {IProduct} from "@/entities";
import {getPhotoUrl} from "@/shared/libs";

import {Info, Name, ProductPhoto, Wrapper} from './CartProductCard.styles';

interface CartProductCardProps {
    product: IProduct
}

export const CartProductCard = ({product}: CartProductCardProps) => {
    return (
        <Wrapper>
            {product.photos && (
                <ProductPhoto src={getPhotoUrl(product.photos?.[0]?.link || '')} alt={'product photo'}/>
            )}
            <Info>
                <Link to={'/products/' + product.id}>
                    <Name>{product.name}</Name>
                </Link>
                <p>{product.shortDescription}</p>
                <p>В наличии: {product.inStock ? 'Да' : 'Нет'}</p>
            </Info>
        </Wrapper>
    );
};
