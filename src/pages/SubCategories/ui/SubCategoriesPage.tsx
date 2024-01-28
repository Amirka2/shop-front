import React, { useEffect } from 'react';
import {useParams} from "react-router";
import { observer } from "mobx-react";

import {ItemsGrid, MainWrapper} from "@/shared/components";
import { useStores } from "@/shared/hooks";
import { SubCategoryCard } from "@/entities";
import { MainLayout } from "@/shared/ui/Layouts";

import { getSubCategories } from '../api'

export const SubCategoriesPage = observer(() => {
    const { subCategoriesStore } = useStores();
    const { subCategories } = subCategoriesStore;
    const { categoryId } = useParams();

    useEffect(() => {
        const response = getSubCategories(Number(categoryId) || 0);
        response.then(result => subCategoriesStore.set(result))
    }, [])

    const itemsComponents = subCategories.map(s => <SubCategoryCard key={s.id} {...s}/>);

    return (
        <MainLayout>
          <MainWrapper>
            <h1>Подкатегории</h1>
            <ItemsGrid>
              {itemsComponents}
            </ItemsGrid>
          </MainWrapper>
        </MainLayout>
    );
});
