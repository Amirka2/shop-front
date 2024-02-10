import React, {useEffect, useState} from 'react';
import { observer } from "mobx-react";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import {ItemsGrid, MainWrapper, PagePlaceHolder} from "@/shared/components";
import { useStores } from "@/shared/hooks";
import { CategoryCard } from "@/entities";
import { MainLayout } from "@/shared/ui/Layouts";

import { getCategories } from '../api'

export const CategoriesPage = observer(() => {
  const {categoriesStore} = useStores();
  const [isLoading, setLoading] = useState(true);

  const {categories} = categoriesStore;

  useEffect(() => {
    setLoading(true);

    const response = getCategories();
    response.then(result => {
      categoriesStore.set(result);
      setLoading(false);
    })
  }, [])

  const itemsComponents = categories.map(c => <CategoryCard key={c.id} {...c}/>);

  if (isLoading) {
    return (
      <MainLayout>
        <PagePlaceHolder>
          <Spin indicator={
            <LoadingOutlined
              style={{ fontSize: 120 }}
              spin
            />}
          />
        </PagePlaceHolder>
      </MainLayout>
    )
  }

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
