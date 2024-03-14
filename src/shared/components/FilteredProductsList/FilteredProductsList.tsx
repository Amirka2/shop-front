import React, {useEffect, useRef, useState} from "react";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import {getProducts} from "@/pages/Products/api";
import {useStores} from "@/shared/hooks";
import {ItemsGrid, PagePlaceHolder} from "@/shared/components";
import {Button} from "@/shared/ui";
import {ProductCard} from "@/widgets";
import {IProduct} from "@/entities";

import {productBackToFront} from "@/shared/libs";

import * as Styles from "./FilteredProductsList.styles";

interface SearchProps {
  searchInput: string;
  setSearchInput: React.Dispatch<string>;
}

export const FilteredProductsList = ({searchInput, setSearchInput}: SearchProps) => {
  const {searchStore} = useStores();
  const {products} = searchStore;
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchInput]);

  useEffect(() => {
    setLoading(true);

    const response = getProducts();
    response.then(result => {
      const res = result.map(product => productBackToFront(product));
      searchStore.set(res);
      setFilteredProducts(res);
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, products]);

  if (isLoading) {
    return (
      <PagePlaceHolder>
        <Spin indicator={
          <LoadingOutlined
            style={{fontSize: 120}}
            spin
          />}
        />
      </PagePlaceHolder>
    )
  }

  return (
    <Styles.SearchWrapper>
      <Styles.ModalInput
        ref={inputRef}
        placeholder={'Поиск'}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        autoFocus
      />
      {filteredProducts.length > 0 ? (
        <Styles.ProductsContainer>
          <ItemsGrid style={{
            padding: '0 20px',
            justifyContent: 'space-evenly'
          }}>
            {filteredProducts?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ItemsGrid>
        </Styles.ProductsContainer>
      ) : (
        <Styles.LabelContainer>
          <p>
            По данному запросу ничего не найдено
          </p>
          <Button size={"S"} onClick={() => setSearchInput('')}>
            Очистить запрос
          </Button>
        </Styles.LabelContainer>
      )}
    </Styles.SearchWrapper>
  );
};
