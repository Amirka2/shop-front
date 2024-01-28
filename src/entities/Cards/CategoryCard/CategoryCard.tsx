import React from 'react';

import {ICategory} from "@/entities/interfaces";
import {Card} from "@/shared/components";
import {getPhotoUrl} from "@/shared/libs";

import * as Styles from './CategoryCard.styles';

export const CategoryCard = (props: ICategory) => {
    const {
        id,
        groupPhotoLink,
        name,
        subCategoryCount
    } = props;

    return (
        <Card linkTo={id + '/sub-categories'} photoSrc={getPhotoUrl(groupPhotoLink)}>
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
