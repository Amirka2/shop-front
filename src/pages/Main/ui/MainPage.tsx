import React from 'react';
import {ContactsWrapper, Wrapper} from "./MainPage.styles";
import {useMobileOrDesktop} from "@/shared/libs/hooks";
import {items} from "@/pages/Catalog/mock";
import {Contacts, ContactsProps, ItemsGrid, Product} from "@/shared/components";

interface MainPageProps extends ContactsProps {
    itemsValue: number;
    isMobile: boolean;
}

export const MainPage = (props: MainPageProps) => {
    let isMobile = useMobileOrDesktop();
    let width = isMobile ? 600 : 1000;
    const itemsComponents = items.slice(0, props.itemsValue).map(i => <Product {...i}/>);
    return (
        <Wrapper $isMobile={props.isMobile}>
            <aside>
                <h1>Main Page</h1>
                <ContactsWrapper>
                    <Contacts {...props}/>
                </ContactsWrapper>
            </aside>
            <ItemsGrid height={3000} width={width}>
                {itemsComponents}
            </ItemsGrid>
        </Wrapper>
    );
};
