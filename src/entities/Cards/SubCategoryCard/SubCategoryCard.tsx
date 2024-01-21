import React from 'react';

import * as Styles from './SubCategory.styles';

import {Card} from "@/shared/components";

import type {ISubCategory} from "@/entities/interfaces";
import {getPhotoUrl} from "@/shared/libs";

export const SubCategoryCard = (props: ISubCategory) => {
    const {
        id,
        subgroupPhotoLink,
        name,
        productCount
    } = props;

    return (
        <Card linkTo={id + '/products'} photoSrc={getPhotoUrl(subgroupPhotoLink)}>
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
