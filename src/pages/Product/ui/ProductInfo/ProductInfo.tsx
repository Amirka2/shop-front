import React, {useState} from 'react';

import {IProduct} from "@/entities";

import {useStores} from "@/shared/hooks";
import {getProductPrice} from "@/shared/libs";

import * as Styles from './ProductInfo.styles';

export const ProductInfo = (product: IProduct) => {
    const stores = useStores();
    const [text, setText] = useState('В корзину')

    const priceText = getProductPrice(product.inStock, product.price);

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
            <Styles.ProductPrice>Цена: {priceText}</Styles.ProductPrice>
            <Styles.AddToCartButton
              onClick={handleClick}
              disabled={!product.inStock}
            >
              {text}
            </Styles.AddToCartButton>
            <Styles.ProductDescription>
                {product.shortDescription}
            </Styles.ProductDescription>
        </Styles.Wrapper>
    );
}
