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
                {partName
                    ? (
                        <>
                            <Styles.DescriptionPartText>
                                {partName.text}
                            </Styles.DescriptionPartText>
                            <Styles.DescriptionPartList>
                                {partName.tableText
                                    ? (partName.tableText.map(textItem => {
                                        return (
                                            <Styles.DescriptionPartListItem>{textItem}</Styles.DescriptionPartListItem>)
                                    }))
                                    : null
                                }
                            </Styles.DescriptionPartList>
                        </>
                    )
                    : null
                }
                {specs
                    ? (
                        <Styles.DescriptionPartList>
                            <Styles.DescriptionPartSpecifications>
                                <span>Тип</span>
                                <span>{specs.type}</span>
                            </Styles.DescriptionPartSpecifications>
                            <Styles.DescriptionPartSpecifications>
                                <span>Производитель</span>
                                <span>{specs.manufacturer}</span>
                            </Styles.DescriptionPartSpecifications>
                            <Styles.DescriptionPartSpecifications>
                                <span>Страна производства</span>
                                <span>{specs.manufactureCountry}</span>
                            </Styles.DescriptionPartSpecifications>
                        </Styles.DescriptionPartList>
                    )
                    : null
                }
            </Styles.DescriptionPartContentWrapper>
        </Styles.DescriptionPart>
    );
};