import React from 'react';
import {Flex, Wrapper} from './ProductPage.styles';
import {Slider} from "./Slider";
import { ProductInfo } from './ProductInfo';
import {useMobileOrDesktop} from "@/shared/hooks";
import {useProduct} from "@/shared/hooks";
import {useParams} from "react-router";
import {ProductPageDescription} from "@/entities";

export const ProductPage = () => {
    const isMobile = useMobileOrDesktop();
    const params = useParams();
    const product = useProduct(params?.name);

    return product ? (
        <Wrapper isMobile={isMobile}>
            <Flex isMobile={isMobile}>
                <Slider images={product.photos} />
                <ProductInfo {...product}></ProductInfo>
            </Flex>
            <ProductPageDescription {...product}/>
        </Wrapper>
    ) : null;
};
