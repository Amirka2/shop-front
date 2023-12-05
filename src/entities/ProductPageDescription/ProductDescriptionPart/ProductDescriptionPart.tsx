import React from 'react';
import * as Styles from "./ProductDescriptionPart.styles";
import {IDescriptionData, ISpecifications} from "@/entities/interfaces";

interface ProductDescriptionPartProps {
    descriptionPart: {
        id: string;
        name: string;
    },
    partName?: IDescriptionData,
    specs?: ISpecifications,
}

export const ProductDescriptionPart = ({descriptionPart, partName, specs}: ProductDescriptionPartProps) => {
    return (
        <Styles.DescriptionPart id={descriptionPart.id}>
            <Styles.DescriptionPartTitle>{descriptionPart.name}</Styles.DescriptionPartTitle>
            <Styles.DescriptionPartContentWrapper>
            </Styles.DescriptionPartContentWrapper>
        </Styles.DescriptionPart>
    );
};
