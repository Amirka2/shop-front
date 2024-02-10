import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import { observer } from "mobx-react";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import {ItemsGrid, MainWrapper, PagePlaceHolder} from "@/shared/components";
import { useStores } from "@/shared/hooks";
import { SubCategoryCard } from "@/entities";
import { MainLayout } from "@/shared/ui/Layouts";

import { getSubCategories } from '../api'

export const SubCategoriesPage = observer(() => {
    const { subCategoriesStore } = useStores();
    const { subCategories } = subCategoriesStore;
    const { categoryId } = useParams();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const response = getSubCategories(Number(categoryId) || 0);
        response.then(result => {
          subCategoriesStore.set(result);

          setLoading(false);
        });
    }, [])

    const itemsComponents = subCategories.map(s => <SubCategoryCard key={s.id} {...s}/>);

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
            <h1>Подкатегории</h1>
            <ItemsGrid>
              {itemsComponents}
            </ItemsGrid>
          </MainWrapper>
        </MainLayout>
    );
});
