import React, { useEffect } from 'react';
import {useParams} from "react-router";
import { observer } from "mobx-react";

import { ItemsGrid } from "@/shared/components";
import { useMobileOrDesktop, useStores } from "@/shared/hooks";
import { SubCategoryCard } from "@/entities";
import { MainLayout } from "@/shared/ui/Layouts";

import { getSubCategories } from '../api'

import * as Styles from "./SubCategoriesPage.styles";

export const SubCategoriesPage = observer(() => {
    const { subCategoriesStore } = useStores();
    const { subCategories } = subCategoriesStore;
    const { categoryId } = useParams();

    useEffect(() => {
        const response = getSubCategories(Number(categoryId) || 0);
        response.then(result => subCategoriesStore.set(result))
    }, [])

    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = subCategories.map(s => <SubCategoryCard key={s.id} {...s}/>);

    return (
        <MainLayout>
          <Styles.Wrapper $isMobile={isMobile}>
            <h1>Подкатегории</h1>
            <ItemsGrid width={width.toString()}>
              {itemsComponents}
            </ItemsGrid>
          </Styles.Wrapper>
        </MainLayout>
    );
});
