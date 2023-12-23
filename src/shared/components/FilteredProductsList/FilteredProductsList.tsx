import {ModalInput, ProductsContainer, SearchWrapper} from "./FilteredProductsList.styles";
import React, {useEffect, useRef} from "react";
import {getProducts} from "@/pages/Products/api";
import {useStores} from "@/shared/hooks";
import {ItemsGrid} from "@/shared/components";
import {ProductCard} from "@/widgets";

interface SearchProps {
    searchInput: string;
    setSearchInput: React.Dispatch<string>;
}

export const FilteredProductsList = ({ searchInput, setSearchInput }: SearchProps) => {
    const { productsStore } = useStores();
    const { products } = productsStore;
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
        })
    }, [])

    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <SearchWrapper>
            <ModalInput
                ref={inputRef}
                placeholder={'Поиск'}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                autoFocus
            />
            <ProductsContainer>
                <ItemsGrid>
                    {filteredProducts?.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    )) || []}
                </ItemsGrid>
            </ProductsContainer>
        </SearchWrapper>
    );
};