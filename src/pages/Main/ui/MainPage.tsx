import React, {useEffect} from 'react';
import {observer} from "mobx-react";

import {getProducts} from "@/pages/Products/api";
import {IContacts} from '@/entities';
import {ProductCard} from '@/widgets';

import {useStores} from "@/shared/hooks";
import {Color} from "@/shared/constants";
import {MainLayout} from "@/shared/ui/Layouts";
import {ItemsGrid} from "@/shared/components";

import * as Styles from "./MainPage.styles";
import {productBackToFront} from "@/shared/libs";

interface MainPageProps extends IContacts {
  itemsValue: number;
}

export const MainPage = observer((props: MainPageProps) => {
  const {
    itemsValue,
  } = props;

  const {productsStore} = useStores();
  const {products} = productsStore;

  const itemsComponents = products
    .slice(0, itemsValue).map(i =>
      <ProductCard {...i}/>
    );

  useEffect(() => {
    const response = getProducts();
    response.then(result => {
      const frontProducts = result.map(p => {
        return productBackToFront(p)
      });
      productsStore.set(frontProducts);
    })
  }, [])

  return (
    <MainLayout>
      <Styles.Wrapper>
        <h1 style={{
          marginBottom: '20px',
          color: Color.blue
        }}>
          Наша продукция
        </h1>
        <ItemsGrid>
          {itemsComponents}
        </ItemsGrid>
      </Styles.Wrapper>
    </MainLayout>
  );
});
