import React, {useEffect} from 'react';
import {observer} from "mobx-react";

import {getProducts} from "@/pages/Products/api";
import {ProductCard, TopBar} from '@/widgets';

import {useStores} from "@/shared/hooks";
import {Color} from "@/shared/constants";
import {Container, Footer, ItemsGrid, MainWrapper} from "@/shared/components";
import {productBackToFront} from "@/shared/libs";
import {CallOrdering} from "@/shared/components/CallOrdering";

import * as Styles from "./MainPage.styles";

export const MainPage = observer(() => {
  const {productsStore} = useStores();
  const {products} = productsStore;

  const itemsComponents = products
    .map(i =>
      <ProductCard key={i.id} {...i}/>
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
    <MainWrapper style={{
      margin: '20px auto 0',
    }}>
      <Container>
        <TopBar />
        <CallOrdering />
        <Styles.Wrapper>
          <h1 style={{
            marginBottom: '20px',
            color: Color.blue
          }}>
            Наша продукция
          </h1>
          <ItemsGrid style={{
            justifyContent: "space-between"
          }}>
            {itemsComponents}
          </ItemsGrid>
        </Styles.Wrapper>
      </Container>
      <Footer withoutPlane={true}/>
    </MainWrapper>
  );
});
