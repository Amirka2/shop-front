import React, {useEffect} from 'react';
import {observer} from "mobx-react";


import {ItemsGrid} from "@/shared/components";
import {useMobileOrDesktop, useStores} from "@/shared/hooks";
import {SubCategoryCard} from "@/entities";

import {Wrapper} from "./SubCategoriesPage.styles";

import { getSubCategories } from '../api'

export const SubCategoriesPage = observer(() => {
    const { subCategoriesStore } = useStores();
    const { subCategories } = subCategoriesStore;

    useEffect(() => {
        const response = getSubCategories();
        response.then(result => subCategoriesStore.set(result))
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
});
