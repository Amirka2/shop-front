import React, {useEffect, useRef, useState} from "react";

import {getProducts} from "@/pages/Products/api";
import {useStores} from "@/shared/hooks";
import {ItemsGrid} from "@/shared/components";
import {Button} from "@/shared/ui";
import {ProductCard} from "@/widgets";

import * as Styles from "./FilteredProductsList.styles";

interface SearchProps {
    searchInput: string;
    setSearchInput: React.Dispatch<string>;
}

export const FilteredProductsList = ({ searchInput, setSearchInput }: SearchProps) => {
    const { productsStore } = useStores();
    const { products } = productsStore;
    const [filteredProducts, setFilteredProducts] = useState(products);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchInput]);

    useEffect(() => {
        const response = getProducts();
        response.then(result => {
            productsStore.set(result);
            setFilteredProducts(result);
        })
    }, [])

    useEffect(() => {
        setFilteredProducts(
            products.filter((item) =>
                item.name.toLowerCase().includes(searchInput.toLowerCase())
            )
        );
    }, [searchInput, products]);

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
                  <ItemsGrid>
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
