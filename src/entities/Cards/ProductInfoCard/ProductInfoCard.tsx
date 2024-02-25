import React, {useMemo} from 'react';

import type {IProduct} from "@/entities";
import {PhotoSlider} from "@/shared/components";
import {getPhotoUrl} from "@/shared/libs";

import * as Styles from "./ProductInfoCard.styles";

export const ProductInfoCard = (props: IProduct) => {
  const priceText = useMemo(() => {
    return (`Цена: ` + (props.inStock ? `${props.price} ₽` : 'По запросу'))
  }, [props]);

  const title = useMemo(() => {
    const name = props.name, length = 30;

    if (name.length < length)
      return props.name;

    return name.substring(0, length).trim() + "...";
  }, [props.name]);

  return (
    <Styles.Wrapper>
      {props.photos && (
        <PhotoSlider photos={props.photos.map(p => getPhotoUrl(p.link))} width={200} height={150}/>
      )}
      <Styles.ProductCardInfo>
        <h3><Styles.NavLink to={'/products/' + String(props.id)}>{title}</Styles.NavLink></h3>
        <span>В наличии: {props.inStock ? 'Да' : 'Нет'}</span>
        <span>{priceText}</span>
      </Styles.ProductCardInfo>
    </Styles.Wrapper>
  );
};
