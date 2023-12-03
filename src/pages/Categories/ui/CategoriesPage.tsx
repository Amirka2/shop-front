import React, {useEffect, useState} from 'react';

import {Wrapper} from "./CategoriesPage.styles";

import {ItemsGrid} from "@/shared/components";
import {useMobileOrDesktop} from "@/shared/hooks";
import {CategoryCard, ICategory} from "@/entities";
import { getCategories } from '../api'

export const CategoriesPage = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        const response = getCategories();
        response.then(result => setCategories(result))
    }, [])

    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = categories.map(c => <CategoryCard {...c}/>);
    return (
        <Wrapper $isMobile={isMobile}>
            <h1>Категории</h1>
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
