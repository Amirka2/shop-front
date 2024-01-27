import React, { useEffect } from 'react';
import { observer } from "mobx-react";

import { ItemsGrid } from "@/shared/components";
import { useMobileOrDesktop, useStores } from "@/shared/hooks";
import { CategoryCard } from "@/entities";
import { MainLayout } from "@/shared/ui/Layouts";

import { categories as CATEGORIES } from '@/app/shop/mock';
import { getCategories } from '../api'

import { Wrapper } from "./CategoriesPage.styles";

export const CategoriesPage = observer(() => {
  const {categoriesStore} = useStores();
  let isMobile = useMobileOrDesktop();

  const {categories} = categoriesStore;

  useEffect(() => {
    categoriesStore.set(CATEGORIES);
    // const response = getCategories();
    // response.then(result => {
    //   categoriesStore.set(result);
    // })
  }, [])

  let width = isMobile ? 600 : 1000;
  const itemsComponents = categories.map(c => <CategoryCard {...c}/>);

  return (
    <MainLayout>
      <Wrapper $isMobile={isMobile}>
        <h1>Категории</h1>
        <ItemsGrid width={width.toString()}>
          {itemsComponents}
        </ItemsGrid>
      </Wrapper>
    </MainLayout>
  );
});
