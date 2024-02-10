import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {observer} from "mobx-react";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import {PagePlaceHolder} from "@/shared/components";
import {IProduct, ProductPageDescription} from "@/entities";
import {MainLayout} from "@/shared/ui/Layouts";
import {getPhotoUrl} from "@/shared/libs";

import {getProductById} from "../api";
import {Slider} from "./Slider";
import {ProductInfo} from './ProductInfo';

import * as Styles from './ProductPage.styles';

export const ProductPage = observer(() => {
  const {productId} = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(Number(productId))
      .then(res => {
        setProduct(res);
        setLoading(false);
      })
  }, [productId]);

  if (isLoading) {
    return (
      <MainLayout>
        <PagePlaceHolder>
          <Spin indicator={
            <LoadingOutlined
              style={{ fontSize: 120 }}
              spin
            />}
          />
        </PagePlaceHolder>
      </MainLayout>
    )
  }

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
});
