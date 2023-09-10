import React from 'react';

import * as Styles from './CategoryCard.styles';

import {ICategoryCard} from "@/entities/interfaces";
import {Card} from "@/shared/components";

export const CategoryCard = (props: ICategoryCard) => {
    const {
        id,
        photo,
        name,
        subCategoryCount
    } = props;

    return (
        <Card linkTo={name + '/sub-categories'} photoSrc={photo}>
            <Styles.CategoryInfoWrapper>
                <Styles.Title>
                    {name}
                </Styles.Title>
                <Styles.Count>
                    Подкатегорий: {subCategoryCount}
                </Styles.Count>
            </Styles.CategoryInfoWrapper>
        </Card>
    );
};
