import React from 'react';
import {IProduct} from "@/entities";
import {Info, Name, ProductPhoto, Wrapper} from './CartProductCard.styles';
import {Link} from "react-router-dom";

interface CartProductCardProps {
    product: IProduct
}

export const CartProductCard = ({product}: CartProductCardProps) => {
    return (
        <Wrapper>
            {product.photos && (
                <ProductPhoto src={product.photos[0]} alt={'product photo'}/>
            )}
            <Info>
                <Link to={'/product/' + product.id}>
                    <Name>{product.name}</Name>
                </Link>
                <p>description</p>
            </Info>
        </Wrapper>
    );
};
