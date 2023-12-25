import React, {useEffect, useState} from "react";
import {useStores} from "@/shared/hooks";

import {getProducts} from "@/pages/Products/api";

import * as Styles from "./ProductsList.styles"
import {ProductsListItem} from "./ProductsList.styles";

interface ProductsListProps {
    onProductClick: (productName: string) => void;
    selectedProducts: string[];
}

export const ProductsList = ({ onProductClick, selectedProducts }:ProductsListProps) => {
    const [isLoading, setLoading] = useState(false);
    const { productsStore } = useStores();
    const { products } = productsStore;
    const updateData = () => {
        setLoading(true);
        const response = getProducts();
        response.then(result => {
            productsStore.set(result);
            setLoading(false);
        })
    }

    useEffect(() => {
        if (!isLoading) {
            updateData()
        }
    }, [])

    let availableProducts = products.filter(product => !selectedProducts.includes(product.name));

    return (
        <Styles.ProductsListWrapper>
            <Styles.ProductsList>
                {availableProducts.map((productName, index) => (
                    <ProductsListItem key={index} onClick={() => onProductClick(productName.name)}>
                        {productName.name}
                    </ProductsListItem>
                ))}
            </Styles.ProductsList>
        </Styles.ProductsListWrapper>
    );
};