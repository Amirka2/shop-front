import React, {useEffect, useState} from 'react';
import * as Styles from './ProductDescription.styles';
import {IProduct} from "@/entities";
import {ProductDescriptionPart} from "@/entities/ProductDescription/ProductDescriptionPart/ProductDescriptionPart";

interface descriptionPart {
    id: string,
    name: string,
}
export const ProductDescription = (product: IProduct) => {
    const [descriptionParts, setDescriptionParts] = useState<descriptionPart[]>([]);

    const fillParts = () => {
        if (product.description) {
            setDescriptionParts((arr) =>
                [
                    ...arr,
                    {
                        id: 'description',
                        name: 'Описание',
                    },
                ]
            );
        }
        if (product.specifications) {
            setDescriptionParts((arr) =>
                [
                    ...arr,
                    {
                        id: 'specifications',
                        name: 'Характеристики',
                    }
                ]
            );
        }
        if (product.usage) {
            setDescriptionParts((arr) =>
                [
                    ...arr,
                    {
                        id: 'usage',
                        name: 'Использование',
                    }
                ]
            );
        }
        if (product.examples) {
            setDescriptionParts((arr) =>
                [
                    ...arr,
                    {
                        id: 'examples',
                        name: 'Примеры',
                    }
                ]
            );
        }
    }

    useEffect(() => {
        fillParts();
    }, [])

    const headerLinkElements = descriptionParts.map(l => {
        return (
            <Styles.DescriptionHeaderLink href={'#' + l.id} key={l.id}>{l.name}</Styles.DescriptionHeaderLink>
        );
    })


    console.log(descriptionParts);

    return (
        <Styles.Wrapper>
            <Styles.DescriptionHeader>
                {headerLinkElements}
            </Styles.DescriptionHeader>
            {descriptionParts[0] && (
                <ProductDescriptionPart descriptionPart={descriptionParts[0]} partName={product.description}/>
            )}
            {descriptionParts[1] && (
                <ProductDescriptionPart descriptionPart={descriptionParts[1]} specs={product.specifications}/>
            )}
            {descriptionParts[2] && (
                <ProductDescriptionPart descriptionPart={descriptionParts[2]} partName={product.usage}/>
            )}
            {descriptionParts[3] && (
                <ProductDescriptionPart descriptionPart={descriptionParts[3]} partName={product.examples}/>
            )}
        </Styles.Wrapper>
    );
};
