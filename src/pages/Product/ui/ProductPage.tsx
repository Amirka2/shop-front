import React from 'react';
import {Flex, Wrapper} from './ProductPage.styles';
import {Slider} from "./Slider";
import { ProductInfo } from './ProductInfo';
import {ProductCharacteristic} from "@/pages/Product/ui/ProductCharacteristic";
import {useMobileOrDesktop} from "@/shared/hooks";
import {useProduct} from "@/shared/hooks";
import {useParams} from "react-router";
import {ProductDescription} from "@/entities";

export const ProductPage = () => {
    const isMobile = useMobileOrDesktop();
    const params = useParams();
    const product = useProduct(Number(params.id));

    return (
        <Wrapper isMobile={isMobile}>
            <Flex isMobile={isMobile}>
                <Slider images={product.photos} />
                <ProductInfo {...product}></ProductInfo>
            </Flex>
            <ProductCharacteristic {...product}/>
            <ProductDescription {...product}/>
        </Wrapper>
    );
};
