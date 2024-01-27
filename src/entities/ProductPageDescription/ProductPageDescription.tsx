import React, {useState} from 'react';

import {IProduct} from "@/entities";
import {DocumentReader} from "@/widgets/DocumentReader";

import * as Styles from './ProductPageDescription.styles';

interface descriptionPart {
    id: string,
    name: string,
}

export const ProductPageDescription = (product: IProduct) => {
    const [descriptionParts, setDescriptionParts] = useState<descriptionPart[]>([]);

    const headerLinkElements = descriptionParts.map(l => {
        return (
            <Styles.DescriptionHeaderLink href={'#' + l.id} key={l.id}>{l.name}</Styles.DescriptionHeaderLink>
        );
    })

    return (
        <Styles.Wrapper>
            <Styles.DescriptionHeader>
                {headerLinkElements}
            </Styles.DescriptionHeader>
            {product.productDescriptions && product.productDescriptions.map(partition => (
                <>
                    <h3>{partition.header}</h3>
                    <DocumentReader description={partition.text || ''}/>
                </>
            ))}
        </Styles.Wrapper>
    );
};
