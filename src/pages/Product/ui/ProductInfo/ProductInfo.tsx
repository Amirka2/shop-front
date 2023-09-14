import React, {useState} from 'react';
import * as Styled from './ProductInfo.styles';
import {useMobileOrDesktop, useStores} from "@/shared/hooks";
import {IProduct} from "@/entities";

export const ProductInfo = (product: IProduct) => {
    const isMobile = useMobileOrDesktop();
    const stores = useStores();
    const [text, setText] = useState('В корзину')
    function handleClick() {
        stores.cartStore.increaseProductsCount(product);
        setText('В корзине');
    }

    return (
        <Styled.Wrapper isMobile={isMobile}>
            <Styled.ProductName>{product.name}</Styled.ProductName>
            <Styled.ProductAvailability>
                В наличии: {product.inStock ? (
                <Styled.YesText>ДА</Styled.YesText>) : (
                <Styled.NoText>Нет</Styled.NoText>
            )}
            </Styled.ProductAvailability>
            <Styled.ProductPrice>{product.price + ' ₽'}</Styled.ProductPrice>
            {/*<Styled.AddToCartButton onClick={handleClick}>{text}</Styled.AddToCartButton>*/}
            <Styled.ProductDescription>
                {product.shortDescription}
            </Styled.ProductDescription>
        </Styled.Wrapper>
    );
}
