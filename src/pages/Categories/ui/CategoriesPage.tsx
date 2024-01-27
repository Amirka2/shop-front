import React, { useEffect } from 'react';
import { observer } from "mobx-react";

import {ItemsGrid, MainWrapper} from "@/shared/components";
import { useStores } from "@/shared/hooks";
import { CategoryCard } from "@/entities";
import { MainLayout } from "@/shared/ui/Layouts";

import { getCategories } from '../api'

export const CategoriesPage = observer(() => {
  const {categoriesStore} = useStores();

  const {categories} = categoriesStore;

  useEffect(() => {
    const response = getCategories();
    response.then(result => {
      categoriesStore.set(result);
    })
  }, [])

  const itemsComponents = categories.map(c => <CategoryCard key={c.id} {...c}/>);

  return (
    <MainLayout>
      <MainWrapper>
        <h1>Категории</h1>
        <ItemsGrid>
          {itemsComponents}
        </ItemsGrid>
      </MainWrapper>
    </MainLayout>
  );
});
