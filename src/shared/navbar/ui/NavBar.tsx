import React from 'react';
import {Wrapper, Link} from "./NavBar.styles";
import {IPaths} from "@/shared/interfaces";

interface NavBarProps {
    paths: IPaths;
    isMobile: boolean;
}
export const NavBar = ({paths, isMobile}: NavBarProps) => {
    return (
        <Wrapper $isMobile={isMobile}>
            <Link to={paths.catalog} $isMobile={isMobile} $isTop={isMobile} $isLeft={!isMobile}>Каталог</Link>
            <Link to={paths.aboutUs} $isMobile={isMobile}>О нас</Link>
            <Link to={paths.main} $isMobile={isMobile}>Главная</Link>
            <Link to={paths.payment} $isMobile={isMobile}>Оплата</Link>
            <Link to={paths.shipping} $isMobile={isMobile} $isBottom={true} $isRight={!isMobile}>Доставка</Link>
        </Wrapper>
    );
};

