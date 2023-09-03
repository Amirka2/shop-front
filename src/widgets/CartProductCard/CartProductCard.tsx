import React from 'react';
import {IProduct} from "@/entities";
import {Info, Name, Wrapper} from './CartProductCard.styles';
import {useMobileOrDesktop} from "@/shared/hooks";

interface CartProductCardProps {
    product: IProduct
}

export const CartProductCard = ({product}: CartProductCardProps) => {
    return (
        <Wrapper>
            <img src={'icons/logo.png'} alt={'product photo'}/>
            <Info>
                <Name>{product.name}</Name>
                <p>description</p>
            </Info>
        </Wrapper>
    );
};
