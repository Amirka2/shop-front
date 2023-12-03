import React, {useEffect, useState} from 'react';

import {Wrapper} from "./SubCategoriesPage.styles";

import {ItemsGrid} from "@/shared/components";
import {useMobileOrDesktop} from "@/shared/hooks";
import {ISubCategory, SubCategoryCard} from "@/entities";
import { getSubCategories } from '../api'

export const SubCategoriesPage = () => {
    const [subCategories, setSubCategories] =
        useState<ISubCategory[]>([]);

    useEffect(() => {
        const response = getSubCategories();
        response.then(result => setSubCategories(result))
    }, [])

    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = subCategories.map(s => <SubCategoryCard {...s}/>);

    return (
        <Wrapper $isMobile={isMobile}>
            <h1>Подкатегории</h1>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
