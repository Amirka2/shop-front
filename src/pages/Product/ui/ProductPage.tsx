import React from 'react';
import {Flex, Wrapper} from './ProductPage.styles';
import {IProduct} from "@/entities";
import {Slider} from "./Slider";
import { ProductInfo } from './ProductInfo';
import {ProductCharacteristic} from "@/pages/Product/ui/ProductCharacteristic";
import {useMobileOrDesktop} from "@/shared/hooks";
import {useProduct} from "@/shared/hooks";

export const ProductPage = () => {
    const isMobile = useMobileOrDesktop();
    const product = useProduct(0);

    return (
        <Wrapper isMobile={isMobile}>
            <Flex isMobile={isMobile}>
                <Slider images={product.photos} />
                <ProductInfo {...product}></ProductInfo>
            </Flex>
            <ProductCharacteristic {...product}/>
        </Wrapper>
    );
};
