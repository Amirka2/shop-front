import React, {useEffect} from 'react';

import {Wrapper} from "./CategoriesPage.styles";

import {ItemsGrid} from "@/shared/components";
import {useMobileOrDesktop, useStores} from "@/shared/hooks";
import {CategoryCard} from "@/entities";
import {getCategories} from '../api'
import {observer} from "mobx-react";

export const CategoriesPage = observer(() => {
  const {categoriesStore} = useStores();
  let isMobile = useMobileOrDesktop();

  const {categories} = categoriesStore;

  useEffect(() => {
    const response = getCategories();
    response.then(result => {
      categoriesStore.set(result);
    })
  }, [])

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
});
