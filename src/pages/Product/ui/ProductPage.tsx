import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {IProduct, ProductPageDescription} from "@/entities";
import {MainLayout} from "@/shared/ui/Layouts";
import {getPhotoUrl} from "@/shared/libs";

import {getProductById} from "../api";
import {Slider} from "./Slider";
import {ProductInfo} from './ProductInfo';

import * as Styles from './ProductPage.styles';

export const ProductPage = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    getProductById(Number(productId))
      .then(res => {
        setProduct(res);
      })
  }, [productId]);

  return product ? (
    <MainLayout>
      <Styles.Wrapper>
        <Styles.Flex>
          {product.photos && (
            <Slider images={product.photos.map(p => getPhotoUrl(p.link))}/>
          )}
          <ProductInfo {...product}></ProductInfo>
        </Styles.Flex>
        <ProductPageDescription {...product}/>
      </Styles.Wrapper>
    </MainLayout>
  ) : null;
};
