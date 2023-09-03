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
    } = props;
    let width = isMobile ? 600 : 1000;
    const itemsComponents = products
        .slice(0, itemsValue).map(i =>
            <ProductCard {...i}/>
        );
    return (
        <Wrapper $isMobile={isMobile}>
            {isMobile ? null : (
                <aside>
                    <Categories categories={categories}/>
                    <ContactsWrapper>
                        <Contacts/>
                    </ContactsWrapper>
                </aside>
            )}
            <ItemsGrid width={width.toString()}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
