import React from 'react';
import {ContactsWrapper, Wrapper} from "./MainPage.styles";
import {products} from "@/app/shop/mock";
import {Categories, CategoriesProps, ItemsGrid} from "@/shared/components";
import { Contacts, IContacts} from '@/entities';
import { ProductCard } from '@/widgets';
import {useMobileOrDesktop} from "@/shared/hooks";

interface MainPageProps extends IContacts, CategoriesProps {
    itemsValue: number;
}

export const MainPage = (props: MainPageProps) => {
    const isMobile = useMobileOrDesktop();
    const {
        itemsValue,
        categories,
        ...contacts
    } = props;
    let width = isMobile ? 600 : 1000;
    const itemsComponents = products
        .slice(0, itemsValue).map(i =>
            <ProductCard {...i}/>
        );
    return (
        <Wrapper $isMobile={isMobile}>
            <aside>
                <Categories categories={categories}/>
                <ContactsWrapper>
                    <Contacts/>
                </ContactsWrapper>
            </aside>
            <ItemsGrid height={3000} width={width}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
