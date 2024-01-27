import React from 'react';

import type {IProduct} from "@/entities";
import {PhotoSlider} from "@/shared/components";

import * as Styles from "./ProductInfoCard.styles";

export const ProductInfoCard = (props: IProduct) => {
  return (
    <Styles.Wrapper>
      {props.photos && (
        <PhotoSlider photos={props.photos} width={200} height={150}/>
      )}
      <Styles.ProductCardInfo>
        <h3><Styles.NavLink to={props.name}>{props.name}</Styles.NavLink></h3>
        <span>В наличии: {props.inStock ? 'Да' : 'Нет'}</span>
        <span>Цена: {`${!props.isFixedPrice ? 'от' : ''} ${props.price} руб.`}</span>
      </Styles.ProductCardInfo>
    </Styles.Wrapper>
  );
};
