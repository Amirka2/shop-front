import React, {useState} from 'react';

import {IDescriptionData, IProduct} from "@/entities";
import {DocumentReader} from "@/widgets/DocumentReader";

import * as Styles from './ProductPageDescription.styles';

export const ProductPageDescription = (product: IProduct) => {
    const [descriptionParts, setDescriptionParts] = useState<IDescriptionData[]>(product.productDescriptions);

    const headerLinkElements = descriptionParts.map(l => {
        return (
            <Styles.DescriptionHeaderLink href={'#' + l.id} key={l.id}>{l.header}</Styles.DescriptionHeaderLink>
        );
    })

    return (
        <Styles.Wrapper>
            <Styles.DescriptionHeader>
                {headerLinkElements}
            </Styles.DescriptionHeader>
            {product.productDescriptions && product.productDescriptions.map(partition => (
                <>
                    <h3 id={String(partition.id)}>{partition.header}</h3>
                    <DocumentReader description={partition.text || ''}/>
                </>
            ))}
        </Styles.Wrapper>
    );
};
