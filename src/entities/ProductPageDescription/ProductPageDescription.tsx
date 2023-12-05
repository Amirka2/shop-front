import React, {useEffect, useState} from 'react';

import * as Styles from './ProductPageDescription.styles';

import {IProduct} from "@/entities";
import {ProductDescriptionPart} from "@/entities/ProductPageDescription/ProductDescriptionPart/ProductDescriptionPart";

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
            {product.description && product.description.map(partition => (
                <>
                    <h3>{partition.name}</h3>
                    <section dangerouslySetInnerHTML={{__html: partition?.body || ''}}>
                    </section>
                </>
            ))}
        </Styles.Wrapper>
    );
};
