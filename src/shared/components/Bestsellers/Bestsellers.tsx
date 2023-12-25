import {useState} from "react";
import {ProductsList} from "@/shared/components/ProductsList";

import * as Styles from "./Bestsellers.styles"


export const Bestsellers = () => {
    const [isItemsMenuOpen, setItemsMenuOpen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

    const handleProductClick = (productName: string) => {
        setSelectedProducts(prevProducts => [...prevProducts, productName]);
    };

    return (
        <Styles.BestsellersWrapper>
            <Styles.AllBestsellersContent>
                <Styles.BestsellersListTitle>BestSellers:</Styles.BestsellersListTitle>
                <Styles.BestsellersList>
                    {selectedProducts.map((productName, index) => (
                        <Styles.BestsellersListItem key={index}>
                            {productName}
                        </Styles.BestsellersListItem>
                    ))}
                </Styles.BestsellersList>
            </Styles.AllBestsellersContent>
            <Styles.BestsellersAddContent>
                <Styles.BestsellersListTitle>Добавить товары:</Styles.BestsellersListTitle>
                <Styles.BestsellersAddButton onClick={() => setItemsMenuOpen(prev => !prev)}>
                    {isItemsMenuOpen ? '-' : '+'}
                </Styles.BestsellersAddButton>
                {isItemsMenuOpen &&
                    <ProductsList
                        onProductClick={handleProductClick}
                        selectedProducts={selectedProducts}
                    />
                }
            </Styles.BestsellersAddContent>
        </Styles.BestsellersWrapper>
    );
};