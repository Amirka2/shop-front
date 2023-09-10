import React from 'react';

import * as Styles from './SubCategory.styles';

import {Card} from "@/shared/components";

import type {ISubCategoryCard} from "@/entities/interfaces";

export const SubCategoryCard = (props: ISubCategoryCard) => {
    const {
        id,
        photo,
        name,
        productCount
    } = props;

    return (
        <Card linkTo={name + '/products'} photoSrc={photo}>
            <Styles.SubCategoryInfoWrapper>
                <Styles.Title>
                    {name}
                </Styles.Title>
                <Styles.Count>
                    Товаров: {productCount}
                </Styles.Count>
            </Styles.SubCategoryInfoWrapper>
        </Card>
    );
};
