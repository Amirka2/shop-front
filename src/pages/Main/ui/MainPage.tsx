import React from 'react';
import {ContactsWrapper, Wrapper} from "./MainPage.styles";
import {items} from "@/pages/Catalog/mock";
import {Categories, CategoriesProps, Contacts, ContactsProps, ItemsGrid, Product} from "@/shared/components";

interface MainPageProps extends ContactsProps, CategoriesProps {
    itemsValue: number;
    isMobile: boolean;
}

export const MainPage = (props: MainPageProps) => {
    const {
        isMobile,
        itemsValue,
        categories,
        ...contacts
    } = props;
    let width = isMobile ? 600 : 1000;
    const itemsComponents = items
        .slice(0, itemsValue).map(i =>
            <Product {...i}/>
        );
    return (
        <Wrapper $isMobile={isMobile}>
            <aside>
                <Categories categories={categories}/>
                <ContactsWrapper>
                    <Contacts {...contacts}/>
                </ContactsWrapper>
            </aside>
            <ItemsGrid height={3000} width={width}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
