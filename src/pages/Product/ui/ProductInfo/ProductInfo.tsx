import React, {useState} from 'react';
import { useStores } from "@/shared/hooks";
import {IProduct} from "@/entities";

import * as Styles from './ProductInfo.styles';

export const ProductInfo = (product: IProduct) => {
    const stores = useStores();
    const [text, setText] = useState('В корзину')
    function handleClick() {
        stores.cartStore.increaseProductsCount(product);
        setText('В корзине');
    }

    return (
        <Styles.Wrapper>
            <Styles.ProductName>{product.name}</Styles.ProductName>
            <Styles.ProductAvailability>
                <div>
                    В наличии: {product.inStock ? (
                    <Styles.YesText>Да</Styles.YesText>) : (
                    <Styles.NoText>Нет</Styles.NoText>
                )}
                </div>
                {!product.inStock && product.nextArrivalDate && (
                    <span>Примерная дата следующей поставки: {product.nextArrivalDate}</span>
                )}
            </Styles.ProductAvailability>
            <Styles.ProductPrice>{product.price + ' ₽'}</Styles.ProductPrice>
            <Styles.AddToCartButton onClick={handleClick}>{text}</Styles.AddToCartButton>
            <Styles.ProductDescription>
                {product.shortDescription}
            </Styles.ProductDescription>
        </Styles.Wrapper>
    );
}
