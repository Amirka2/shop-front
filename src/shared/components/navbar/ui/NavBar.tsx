import React from 'react';

import {Wrapper, Link} from "./NavBar.styles";

import {Paths} from "@/shared/routing";
import {useMobileOrDesktop} from "@/shared/hooks";

export const NavBar = () => {
    const isMobile = useMobileOrDesktop();

    return (
        isMobile ? null : (
            <Wrapper $isMobile={isMobile}>
                <Link to={Paths.categories} $isMobile={isMobile} $isTop={isMobile} $isLeft={!isMobile}>Категории</Link>
                <Link to={Paths.contacts} $isMobile={isMobile}>Контакты</Link>
                <Link to={Paths.aboutUs} $isMobile={isMobile}>О нас</Link>
                <Link to={Paths.main} $isMobile={isMobile}>Главная</Link>
                <Link to={Paths.payment} $isMobile={isMobile}>Оплата</Link>
                <Link to={Paths.shipping} $isMobile={isMobile} $isBottom={true} $isRight={!isMobile}>Доставка</Link>
            </Wrapper>
        )
    );
};

