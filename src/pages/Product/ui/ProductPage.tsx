import React from 'react';
import { useParams } from "react-router";

import { useMobileOrDesktop } from "@/shared/hooks";
import { useProduct } from "@/shared/hooks";
import { ProductPageDescription } from "@/entities";
import { MainLayout } from "@/shared/ui/Layouts";

import { Slider } from "./Slider";
import { ProductInfo } from './ProductInfo';

import * as Styles from './ProductPage.styles';

export const ProductPage = () => {
    const isMobile = useMobileOrDesktop();
    const params = useParams();
    const product = useProduct(params?.name);

    return product ? (
        <MainLayout>
          <Styles.Wrapper isMobile={isMobile}>
            <Styles.Flex isMobile={isMobile}>
              {product.photos && (
                <Slider images={product.photos.map(p => p.link)} />
              )}
              <ProductInfo {...product}></ProductInfo>
            </Styles.Flex>
            <ProductPageDescription {...product}/>
          </Styles.Wrapper>
        </MainLayout>
    ) : null;
};
